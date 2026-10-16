import {State} from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length === 0) {
        console.log("Please provide a Pokemon name to catch.");
        return;
    }
    const pokemonName = args[0];
    // Implementation for catching the Pokemon would go here
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
    const randomChance = Math.random() * 10;
    if (randomChance > pokemon.base_experience / 100) { // Example catch rate based on base experience
        console.log(`${pokemon.name} was caught!`);
        state.pokedex[pokemon.name] = pokemon;
        console.log(`You may now inspect it with the inspect command.`)
    } else {
        console.log(`${pokemonName} escaped!`);
    }
}
