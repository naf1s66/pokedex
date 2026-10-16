import type { State } from "./state.js";
export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:");
    console.log("");
    for (const [name, command] of Object.entries(state.commands)) {
        console.log(`${name}: ${command.description}`);
    }
}