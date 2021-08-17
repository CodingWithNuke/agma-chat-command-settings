const gameSettings = [
  { displayName: "Dark Theme", name: "darktheme", function: window.setDark, id: "cDark" },
  { displayName: "Fancy Grid", name: "fancygrid", function: window.setFancyGrid, id: "cFancyGrid" },
  { displayName: "Section Grid", name: "sectiongrid", function: window.setSectionGrid, id: "cSectionGrid" },
  { displayName: "Gridlines", name: ["gridline", "gridlines"], function: window.setGrid, id: "cGrid" },
  { displayName: "Skins", name: ["skin", "skins"], function: window.setSkins, id: "cSkins" },
  { displayName: "Wearables", name: ["wearable", "wearables"], function: window.setWearables, id: "cWearables" },
  { displayName: "Show Names", name: ["name", "names"], function: window.setNames, id: "cNames" },
  { displayName: "Minion Names", name: ["minionname", "minionnames"], function: window.setMinionNames, id: "cMinionNames" },
  { displayName: "Large Names", name: ["largename", "largenames"], function: window.setLargeNames, id: "cLargeNames" },
  { displayName: "Name Outlines", name: ["nameoutline", "nameoutlines"], function: window.setNameOutlines, id: "cNameOutlines" },
  { displayName: "Show Mass", name: "mass", function: window.setMass, id: "cMass" },
  { displayName: "Show Food", name: "food", function: window.setFood, id: "cFood" },
  { displayName: "Cell Animations", name: ["cellanimation", "cellanimations"], function: window.setCellAnimations, id: "cCellAnimations" },
  { displayName: "Skin Animations", name: ["skinanimation", "skinanimations"], function: window.setSkinAnimations, id: "cSkinAnimations" },
  { displayName: "Map Border", name: "mapborder", function: window.setMapBorder, id: "cMapBorder" },
  { displayName: "Sounds", name: ["sound", "sounds"], function: window.setSounds, id: "cSounds" },
  { displayName: "Infinite Zoom", name: "infinitezoom", function: window.setZoom, id: "cZoom" },
  { displayName: "Fixed Zoom", name: "fixedzoom", function: window.setFixedZoom, id: "cFixedZoom" },
  { displayName: "Slow Motion", name: "slowmotion", function: window.setSlowMotion, id: "cSlowMotion" },
  { displayName: "Minion Panel", name: "minionpanel", function: window.setMinionUi, id: "cMinionUi" },
  { displayName: "Leaderboard", name: "leaderboard", function: window.setLeaderboard, id: "cLeaderboard" },
  { displayName: "Chat", name: "chat", function: window.setChat, id: "cChat" },
  { displayName: "Minimap", name: "minimap", function: window.setMinimap, id: "cMinimap" },
  { displayName: "FPS / Ping / Stats", name: ["fps", "ping", "stats"], function: window.setFPS, id: "cFPS" },
  { displayName: "Cell Colors", name: ["color", "colors", "cellcolor", "cellcolors"], function: window.setColors, id: "cColors" },
  { displayName: "Cell Borders", name: ["cellborder", "cellborders"], function: window.setCellBorders, id: "cCellBorders" },
  { displayName: "Cell Spikes", name: ["cellspike", "cellspikes"], function: window.setCellSpikes, id: "cCellSpikes" },
  { displayName: "Classic Virus Look", name: "classicvirus", function: window.setClassicViruses, id: "cClassicViruses" },
  { displayName: "Polygon Shapes", name: ["polygonshape", "polygonshapes"], function: window.setPolygonShapes, id: "cPolygonShapes" },
  { displayName: "Line Shapes", name: ["lineshape", "lineshapes"], function: window.setLineShapes, id: "cLineShapes" },
  { displayName: "Bubble Cells", name: ["bubblecell", "bubblecells"], function: window.setBubbleCells, id: "cBubbleCells" },
]

const userSettings = [
  { displayName: "Online Status", name: "onlinestatus", function: window.setFriendlistOnline, id: "cVisibilityStatus" },
  { displayName: "Allow Party Invitations", name: "partyinvite", function: window.showPartyInvite, id: "cAllowPartyInvite" },
  { displayName: "Allow Party Animations", name: ["partyanimation", "partyanimations"], function: window.setPartyAnimations, id: "cAllowPartyAnimations" },
  { displayName: "Auto Feed", name: "autofeed", function: window.setAutoFeedEnabled, id: "cAutoFeed" },
  { displayName: "Gold Nickname", name: ["goldnick", "goldnickname"], function: window.setGoldNickname, id: "cGoldName" },
  { displayName: "Gold Crown in Chat", name: "goldcrown", function: window.setGoldCrownChat, id: "cGoldCrownChat" },
  { displayName: "Set Skins on Minions", name: ["minionskin", "minionskins"], function: window.setMinionSkins, id: "cMinionSkinStatus" },
  { displayName: "Video Ads", name: ["videoad", "videoads"], function: window.setVideoAds, id: "cVideoAds" },
]

exports.availableSettings = [
  ...gameSettings,
  ...userSettings
]