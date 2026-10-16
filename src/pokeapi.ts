import { Cache } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private readonly cache: Cache;

  constructor() {
    this.cache = new Cache(5 * 60 * 1000); // Cache entries expire after 5 minutes
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
    if (this.cache.get<ShallowLocations>(url)) {
      return this.cache.get<ShallowLocations>(url)!;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    const data = await response.json();
    this.cache.add(url, data);
    return data as ShallowLocations;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    if (this.cache.get<Location>(url)) {
      return this.cache.get<Location>(url)!;
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }
    const data = await response.json();
    this.cache.add(url, data);
    return data as Location;
  }
  async fetchPokemon(pokemonName: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
    if (this.cache.get<Pokemon>(url)) {
      return this.cache.get<Pokemon>(url)!;
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon: ${response.statusText}`);
    }
    const data = await response.json();
    this.cache.add(url, data);
    return data as Pokemon;
  }
}

export type Pokemon = {
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    stats: {
      base_stat: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
};

export type Location = {
  pokemon_encounters: Encounter[]
};

export type Encounter = {
  pokemon: {
    name: string;
    url: string;
  };
};
export interface ShallowLocations {
    count: number;
    next: string | null;
    previous: string | null;
    results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
