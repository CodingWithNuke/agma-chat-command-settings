import { defineCommand } from "io-scripts";

import { useAlert, Colors } from "@io-scripts/alert";

import { AVAILABLE_SETTINGS } from "../constants";

export default defineCommand({
  name: "setting",
  aliases: ["s"],
  run: (script, chatCtx, args) => {
    if (args.length == 1) {
      const setting = AVAILABLE_SETTINGS.find((item) => {
        if (!item) return false;

        return Array.isArray(item.name)
          ? item.name.find((itemName) => itemName == args[0])
          : item.name == args[0];
      });

      if (!setting) {
        useAlert(`No setting found with name "${args[0]}"`, {
          alertElementSelector: "#curser",
          textColor: Colors.RED,
        });
        return;
      }

      const { displayName, id } = setting;

      const settingElement = document.getElementById(id);

      useAlert(
        `The setting "${displayName}" is turned ${
          settingElement.checked ? "on" : "off"
        }`,
        {
          alertElementSelector: "#curser",
          textColor: settingElement.checked ? Colors.LIME : Colors.RED,
        }
      );
    }

    if (args.length == 2) {
      if (args[1] == "on" || args[1] == "off") {
        const on = args[1] === "on";

        const setting = AVAILABLE_SETTINGS.find((item) => {
          if (!item) return false;

          return Array.isArray(item.name)
            ? item.name.find((itemName) => itemName == args[0])
            : item.name == args[0];
        });

        if (!setting) {
          useAlert(`No setting found with name "${args[0]}"`, {
            alertElementSelector: "#curser",
            textColor: Colors.RED,
          });
          return;
        }

        const { displayName, function: settingFunction, id } = setting;

        const settingElement = document.getElementById(id);

        settingFunction(on);
        settingElement.checked = on;
        useAlert(
          `The setting "${displayName}" has been turned ${on ? "on" : "off"}`,
          {
            alertElementSelector: "#curser",
            textColor: on ? Colors.LIME : Colors.RED,
          }
        );
      }
    }
  },
});
