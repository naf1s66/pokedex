import type { State } from "./state.js";
export async function commandExplore(state: State, ...args: string[]) {
    if (args.length === 0) {
        console.log("Please provide a location name to explore.");
        return;
    }
    const locationName = args[0];
    // Implementation for exploring the location would go here
    console.log(`Exploring ${locationName}...`);
    const pokemon = await state.pokeAPI.fetchLocation(locationName);
    console.log(`Found Pokemon:`)
    for (const encounter of pokemon.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}