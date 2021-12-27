import { createScript } from "io-scripts";

const script = createScript({
  chatElementSelector: "#chtbox",
  silent: true,
});

import * as commands from "./commands";
for (const name in commands) {
  const command = commands[name];
  script.command(name, command);
}
