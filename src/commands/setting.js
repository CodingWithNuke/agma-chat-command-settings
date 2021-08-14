const { defineCommand } = require("@agmajs/script");

const { useAlert, Colors } = require("@agmajs/alert");

const availableSettings = [
  // setting name, function, setting ID
  { displayName: "Dark Theme", name: "darktheme", function: window.setDark, id: "cDark" },
  { displayName: "Fancy Grid", name: "fancygrid", function: window.setFancyGrid, id: "cFancyGrid" },
  { displayName: "Section Grid", name: "sectiongrid", function: window.setSectionGrid, id: "cSectionGrid" },
  { displayName: "Gridlines", name: "gridlines", function: window.setGrid, id: "cGrid" },
  { displayName: "Skins", name: "skins", function: window.setSkins, id: "cSkins" },
  { displayName: "Wearables", name: "wearables", function: window.setWearables, id: "cWearables" },
  { displayName: "Show Names", name: "names", function: window.setNames, id: "cNames" },
  { displayName: "Minion Names", name: "minionnames", function: window.setMinionNames, id: "cMinionNames" },
  { displayName: "Large Names", name: "largenames", function: window.setLargeNames, id: "cLargeNames" },
  { displayName: "Name Outlines", name: "nameoutlines", function: window.setNameOutlines, id: "cNameOutlines" },
  { displayName: "Show Mass", name: "mass", function: window.setMass, id: "cMass" },
  { displayName: "Show Food", name: "food", function: window.setFood, id: "cFood" },
  { displayName: "Cell Animations", name: "cellanimations", function: window.setCellAnimations, id: "cCellAnimations" },
  { displayName: "Skin Animations", name: "skinanimations", function: window.setSkinAnimations, id: "cSkinAnimations" },
  { displayName: "Map Border", name: "mapborder", function: window.setMapBorder, id: "cMapBorder" },
  { displayName: "Sounds", name: "sounds", function: window.setSounds, id: "cSounds" },
  { displayName: "Infinite Zoom", name: "infinitezoom", function: window.setZoom, id: "cZoom" },
  { displayName: "Fixed Zoom", name: "fixedzoom", function: window.setFixedZoom, id: "cFixedZoom" },
  { displayName: "Slow Motion", name: "slowmotion", function: window.setSlowMotion, id: "cSlowMotion" },
  { displayName: "Minion Panel", name: "minionpanel", function: window.setMinionUi, id: "cMinionUi" },
  { displayName: "Leaderboard", name: "leaderboard", function: window.setLeaderboard, id: "cLeaderboard" },
  { displayName: "Chat", name: "chat", function: window.setChat, id: "cChat" },
  { displayName: "Minimap", name: "minimap", function: window.setMinimap, id: "cMinimap" },
  { displayName: "FPS / Ping / Stats", name: "fps", function: window.setFPS, id: "cFPS" },
  { displayName: "Cell Colors", name: "colors", function: window.setColors, id: "cColors" },
  { displayName: "Cell Borders", name: "cellborders", function: window.setCellBorders, id: "cCellBorders" },
  { displayName: "Cell Spikes", name: "cellspikes", function: window.setCellSpikes, id: "cCellSpikes" },
  { displayName: "Classic Virus Look", name: "classicvirus", function: window.setClassicViruses, id: "cClassicViruses" },
  { displayName: "Polygon Shapes", name: "polygonshapes", function: window.setPolygonShapes, id: "cPolygonShapes" },
  { displayName: "Line Shapes", name: "lineshapes", function: window.setLineShapes, id: "cLineShapes" },
  { displayName: "Bubble Cells", name: "bubblecells", function: window.setBubbleCells, id: "cBubbleCells" },
];

module.exports = defineCommand({
  name: "setting",
  aliases: ["s"],
  run: (script, chatCtx, args) => {
    if (args.length == 1) {
      const setting = availableSettings.find((item) => {
        if (!item) return false;

        return item.name == args[0];
      });

      if (!setting) {
        useAlert(`No setting found with name "${args[0]}"`, {
          textColor: Colors.RED,
        });
        return;
      }

      const { displayName, id } = setting;

      const settingElement = document.getElementById(id);

      useAlert(
        `The setting "${displayName}" is turned ${settingElement.checked ? "on" : "off"
        }`,
        {
          textColor: settingElement.checked ? Colors.LIME : Colors.RED,
        }
      );
    }

    if (args.length == 2) {
      if (args[1] == "on" || args[1] == "off") {
        const on = args[1] === "on";

        const setting = availableSettings.find((item) => {
          if (!item) return false;

          return item.name == args[0];
        });

        if (!setting) {
          useAlert(`No setting found with name "${args[0]}"`, {
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
            textColor: on ? Colors.LIME : Colors.RED,
          }
        );
      }
    }
  },
});
