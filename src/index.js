import { createScript } from "io-scripts";

const script = createScript({
  chatElementSelector: "#chtbox",
  silent: true,
});

import commands from "./commands";
commands.forEach((command) => script.command(command.name, command));
