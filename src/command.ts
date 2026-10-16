import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import type { CLICommand } from "./state.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays a map of 20 location areas in the Pokemon world", 
      callback: commandMap,
      // can add more commands here
    },
    mapb: {
      name: "mapb",
      description: "Displays a map of the previous 20 location areas in the Pokemon world",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "Explore a specific location area in the Pokemon world",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch a specific Pokemon in the Pokemon world",
      callback: commandCatch,
    }, 
    inspect: {
      name: "inspect",
      description: "Inspect any Pokemon already seen before",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Show list of all Pokemons caught by user",
      callback: commandPokedex,
    },
  }
}
