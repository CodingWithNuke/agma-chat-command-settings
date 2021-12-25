const { createScript } = require("io-scripts");

const script = createScript({
  chatElementSelector: "#chtbox",
  silent: true,
});

const commands = require("./commands");
commands.forEach((command) => script.command(command.name, command));
