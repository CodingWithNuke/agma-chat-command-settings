const { defineCommand } = require("@agmajs/script");

const { useAlert, Colors } = require("@agmajs/alert");

const availableSettings = [
  ["darktheme", window.setDark],
  ["fancygrid", window.setFancyGrid],
  ["sectiongrid", window.setSectionGrid],
  ["gridlines", window.setGrid],
  ["skins", window.setSkins],
  ["wearables", window.setWearables],
  ['names', window.setNames],
  ['minionnames', window.setMinionNames],
  ['largenames', window.setLargeNames],
  ['nameoutlines', window.setNameOutlines],
  ['mass', window.setMass],
  ['food', window.setFood],
  ['cellanimations', window.setCellAnimations],
  ['skinanimations', window.setSkinAnimations],
  ['mapborder', window.setMapBorder],
  ['sounds', window.setSounds],
  ['infinitezoom', window.setZoom],
  ['fixedzoom', window.setFixedZoom],
  ['slowmotion', window.setSlowMotion],
  ['minionpanel', window.setMinionUi],
  ['leaderboard', window.setLeaderboard],
  ['chat', window.setChat],
  ['minimap', window.setMinimap],
  ['fps', window.setFPS],
  ['colors', window.setColors],
  ['cellborders', window.setCellBorders],
  ['cellspikes', window.setCellSpikes],
  ['classicvirus', window.setClassicViruses],
  ['polygonshapes', window.setPolygonShapes],
  ['lineshapes', window.setLineShapes],
  ['bubblecells', window.setBubbleCells]
];

module.exports = defineCommand({
  name: "setting",
  run: (script, chatCtx, args) => {
    if (args[1] == 'on' || args[1] == 'off') {

      const on = args[1] === "on";

      const setting = availableSettings.find(item => {
        if (!item) return false;

        return item[0] == args[0];
      })

      if (!setting) {
        useAlert(`No setting found with name "${args[0]}"`, { textColor: Colors.RED })
        return;
      }

      const [settingName, settingFunction] = setting;

      settingFunction(on);
      useAlert(
        `The setting "${settingName}" has been turned ${on ? "on" : "off"}`,
        {
          textColor: on ? Colors.LIME : Colors.RED,
        }
      );
    }
  },
});
