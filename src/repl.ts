import type { State } from "./state.js";
export function cleanInput(input: string): string[] {
  const trimmed = input.trim().toLowerCase()
  if (trimmed === "") {
    return [];
  }
  return trimmed.split(/\s+/);
}

export async function startREPL(state: State) {
    const { rl, commands } = state;
    rl.prompt();
    rl.on("line", async (line) => {
        const cleanedInput = cleanInput(line);
        if (cleanedInput.length === 0) {
            rl.prompt();
            return;
        }
        const commandName = cleanedInput[0];
        const args = cleanedInput.slice(1);
        const command = commands[commandName];
        
        try {
            if (command) {
                await command.callback(state, ...args);
            } else {
                console.log(`Unknown command`);
            }
        } catch (error) {
            console.error(`Error occurred while executing command: ${error}`);
        }
        rl.prompt();
    });
}