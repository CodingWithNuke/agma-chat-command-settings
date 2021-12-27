import { createScript, Command } from "io-scripts";

const script = createScript({
  chatElementSelector: "#chtbox",
  silent: true,
});

import * as commands from "./commands";
for (const name in commands) {
  const command = commands[name];
  script.command(command.name, command);
}
