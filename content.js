// import WHATS_APP_THEMES from "./data/theme";

let observer;
let areVarsUpdated = false;

const WHATS_APP_THEMES = {
  "--avatar-placeholder-primary-rgb": {
    DEFAULT: "255, 255, 255",
    DARK: "255, 255, 255",
  },
  "--avatar-placeholder-primary": {
    DEFAULT: "#c1bfbf",
    DARK: "#c1bfbf",
  },
  "--avatar-placeholder-background-rgb": {
    DEFAULT: "223, 229, 231",
    DARK: "223, 229, 231",
  },
  "--avatar-placeholder-background": {
    DEFAULT: "#4d4e4e",
    DARK: "#4d4e4e",
  },
  "--avatar-border-rgb": {
    DEFAULT: "255, 255, 255",
    DARK: "255, 255, 255",
  },
  "--avatar-border": {
    DEFAULT: "#444040",
    DARK: "#444040",
  },
  "--avatar-background-rgb": {
    DEFAULT: "230, 230, 230",
    DARK: "230, 230, 230",
  },
  " --avatar-background": {
    DEFAULT: "#6d6464",
    DARK: "#6d6464",
  },
  "--icon-lighter": {
    DEFAULT: "rgba(230, 220, 220, 0.3)",
    DARK: "rgba(230, 220, 220, 0.3)",
  },
  "--icon-lighter-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
  "--incoming-primary-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
  "--incoming-primary": {
    DEFAULT: "#989898",
    DARK: "#989898",
  },
  "--incoming-background-deeper-rgb": {
    DEFAULT: "240, 240, 240, 0",
    DARK: "240, 240, 240, 0",
  },
  "--incoming-background-deeper": {
    DEFAULT: "rgba(137, 137, 137, 0.3)",
    DARK: "rgba(137, 137, 137, 0.3)",
  },
  "--incoming-background-rgb": {
    DEFAULT: "1, 1, 1",
    DARK: "1, 1, 1",
  },
  "--incoming-background": {
    DEFAULT: "#0b0b0b",
    DARK: "#0b0b0b",
  },
  "--butterbar-secondary-rgb": {
    DEFAULT: "48, 48, 48",
    DARK: "48, 48, 48",
  },
  "--butterbar-secondary": {
    DEFAULT: "rgba(48,48,48,0.85)",
    DARK: "rgba(48,48,48,0.85)",
  },
  "--butterbar-primary-rgb": {
    DEFAULT: "48, 48, 48",
    DARK: "48, 48, 48",
  },
  "--butterbar-primary": {
    DEFAULT: "rgba(48,48,48,0.96)",
    DARK: "rgba(48,48,48,0.96)",
  },
  "--butterbar-background-update-rgb": {
    DEFAULT: "29, 233, 182",
    DARK: "29, 233, 182",
  },
  "--butterbar-background-update": {
    DEFAULT: "#128e6f",
    DARK: "#128e6f",
  },
  "--butterbar-background-default-rgb": {
    DEFAULT: "157, 225, 254",
    DARK: "157, 225, 254",
  },
  "--butterbar-background-default": {
    DEFAULT: "#006c9a",
    DARK: "#006c9a",
  },
  "--butterbar-background-connection-rgb": {
    DEFAULT: "254, 216, 89",
    DARK: "254, 216, 89",
  },
  "--butterbar-background-connection": {
    DEFAULT: "#af8e23",
    DARK: "#af8e23",
  },
  "--butterbar-background-battery-rgb": {
    DEFAULT: " 249, 103, 93",
    DARK: " 249, 103, 93",
  },
  "--butterbar-background-battery": {
    DEFAULT: "#942e27",
    DARK: "#942e27",
  },
  "--panel-background": {
    DEFAULT: "#ededed",
    DARK: "#161616",
  },
  "--panel-background-rgb": {
    DEFAULT: "237, 237, 237",
    DARK: "237, 237, 237",
  },
  "--panel-background-active": {
    DEFAULT: "#dadada",
    DARK: "#6b6767",
  },
  "--panel-background-active-rgb": {
    DEFAULT: "218, 218, 218",
    DARK: "218, 218, 218",
  },
  "--panel-background-lighter-rgb": {
    DEFAULT: "247, 247, 247",
    DARK: "247, 247, 247",
  },
  "--panel-background-lighter": {
    DEFAULT: "#424242",
    DARK: "#424242",
  },
  "--panel-background-hover-rgb": {
    DEFAULT: "228, 228, 228",
    DARK: "228, 228, 228",
  },
  "--panel-background-hover": {
    DEFAULT: "#2d2b2b",
    DARK: "#2d2b2b",
  },
  "--panel-background-deeper-rgb": {
    DEFAULT: "230, 230, 230",
    DARK: "230, 230, 230",
  },
  "--panel-background-deeper": {
    DEFAULT: "#0c0c0c",
    DARK: "#0c0c0c",
  },
  "--panel-background-deep-rgb": {
    DEFAULT: "217, 217, 217",
    DARK: "217, 217, 217",
  },
  "--panel-background-deep": {
    DEFAULT: "#5c5b5b",
    DARK: "#5c5b5b",
  },
  "--panel-background-colored-deeper-rgb": {
    DEFAULT: "0, 150, 136",
    DARK: "0, 150, 136",
  },
  "--panel-background-colored-deeper": {
    DEFAULT: "#0a7167",
    DARK: "#0a7167",
  },
  "--panel-background-colored-rgb": {
    DEFAULT: "0, 191, 165",
    DARK: "0, 191, 165",
  },
  "--panel-background-colored": {
    DEFAULT: "#08423a",
    DARK: "#08423a",
  },
  "--compose-background-rgb": {
    DEFAULT: "255, 255, 255",
    DARK: "255, 255, 255",
  },
  "--compose-background": {
    DEFAULT: "#2d2f2e",
    DARK: "#2d2f2e",
  },
  "--rich-text-panel-background-rgb": {
    DEFAULT: "240, 240, 240",
    DARK: "240, 240, 240",
  },
  "--rich-text-panel-background": {
    DEFAULT: "#1d1b1b",
    DARK: "#1d1b1b",
  },
  "--dropdown-background-rgb": {
    DEFAULT: "255, 255, 255",
    DARK: "255, 255, 255",
  },
  "--dropdown-background": {
    DEFAULT: "rgba(0, 0, 0, 0.9)",
    DARK: "rgba(0, 0, 0, 0.9)",
  },
  "--secondary-stronger-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
  "--secondary-stronger": {
    DEFAULT: "rgba(200, 200, 200, 0.8)",
    DARK: "rgba(200, 200, 200, 0.8)",
  },
  "--secondary-lighter-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
  "--secondary-lighter": {
    DEFAULT: "rgba(181, 181, 181, 0.45)",
    DARK: "rgba(181, 181, 181, 0.45)",
  },
  "--secondary-light-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
  "--secondary-light": {
    DEFAULT: "rgba(138, 128, 128, 0.25)",
    DARK: "rgba(138, 128, 128, 0.25)",
  },
  "--secondary": {
    DEFAULT: "rgba(194, 194, 194, 0.6)",
    DARK: "rgba(194, 194, 194, 0.6)",
  },
  "--secondary-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },

  "--primary": {
    DEFAULT: "#bababa",
    DARK: "#bababa",
  },
  "--primary-rgb": {
    DEFAULT: "74, 74, 74",
    DARK: "74, 74, 74",
  },
  "--primary-strong": {
    DEFAULT: "#746c6c",
    DARK: "#746c6c",
  },
  "--primary-strong-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
  "--primary-stronger": {
    DEFAULT: "#a5a2a2",
    DARK: "#a5a2a2",
  },
  "--primary-stronger-rgb": {
    DEFAULT: "48, 48, 48",
    DARK: "48, 48, 48",
  },
  "--primary-title": {
    DEFAULT: "#525252",
    DARK: "#525252",
  },
  "--primary-title-rgb": {
    DEFAULT: "81.65, 81.65, 81.65",
    DARK: "81.65, 81.65, 81.65",
  },
  "--outgoing-background": {
    DEFAULT: "#13402f",
    DARK: "#13402f",
  },
  "--outgoing-background-rgb": {
    DEFAULT: "rgba(23, 79, 130, 0.8)",
    DARK: "rgba(23, 79, 130, 0.8)",
  },
  "--outgoing-background-deeper": {
    DEFAULT: "#0b231a",
    DARK: "#0b231a",
  },
  "--outgoing-background-deeper-rgb": {
    DEFAULT: "207, 233, 186",
    DARK: "207, 233, 186",
  },

  "--background-app": {
    DEFAULT: "#121111",
    DARK: "#121111",
  },
  "--background-app-rgb": {
    DEFAULT: "224, 224, 224",
    DARK: "224, 224, 224",
  },
  "--background-default": {
    DEFAULT: "#080808",
    DARK: "#080808",
  },
  "--background-default-rgb": {
    DEFAULT: "255, 255, 255",
    DARK: "255, 255, 255",
  },
  "--background-default-active": {
    DEFAULT: "#4d4c4c",
    DARK: "#4d4c4c",
  },
  "--background-default-active-rgb": {
    DEFAULT: "235, 235, 235",
    DARK: "235, 235, 235",
  },
  "--background-default-hover": {
    DEFAULT: "#3f3a3a",
    DARK: "#3f3a3a",
  },
  "--background-default-hover-rgb": {
    DEFAULT: "245, 245, 245",
    DARK: "245, 245, 245",
  },

  "--border-list": {
    DEFAULT: "#464646",
    DARK: "#464646",
  },
  "--border-list-rgb": {
    DEFAULT: "242, 242, 242",
    DARK: "242, 242, 242",
  },
  "--border-default": {
    DEFAULT: "#464646",
    DARK: "#464646",
  },
  "--border-default-rgb": {
    DEFAULT: "240, 240, 240",
    DARK: "240, 240, 240",
  },
  "--border-panel": {
    DEFAULT: "#464646",
    DARK: "#464646",
  },
  "--border-panel-rgb": {
    DEFAULT: "224, 224, 224",
    DARK: "224, 224, 224",
  },
  "--border-strong": {
    DEFAULT: "#464646",
    DARK: "#464646",
  },
  "--border-strong-rgb": {
    DEFAULT: "217, 217, 217",
    DARK: "217, 217, 217",
  },
  "--border-stronger": {
    DEFAULT: "#464646",
    DARK: "#464646",
  },
  "--border-stronger-rgb": {
    DEFAULT: "0, 0, 0",
    DARK: "0, 0, 0",
  },
};

const COLOURS = {
  BG_MAIN: "black",
};

const setStyle = (key, value) => {
  const root = document.documentElement;
  root.style.setProperty(key, value);
};

const setNewCssVars = (theme = "DARK") => {
  for (const propertyKey in WHATS_APP_THEMES) {
    setStyle(propertyKey, WHATS_APP_THEMES[propertyKey][theme]);
  }
  document.querySelector(
    "body"
  ).style.backgroundImage = `linear-gradient(to bottom, #737371, #000000)`;
};

window.onload = function () {
  chrome.storage.sync.get("darkMode", (data) => {
    const { darkMode } = data;
    if (darkMode) {
      setNewCssVars();
    } else {
      setNewCssVars("DEFAULT");
    }
  });
};
