export enum ColorKey {
  LOGO = "LOGO",
  BRAND = "BRAND",
  BACKGROUND = "BACKGROUND",
  SEARCH_BACKGROUND = "SEARCH_BACKGROUND",
  SIDEBAR_TEXT = "SIDEBAR_TEXT",
  NAV_BACKGROUND = "NAV_BACKGROUND",
  TEXT = "TEXT",
}

export type ColorPalette = {
  [key in ColorKey]: string;
};

export const PRIMARY_RANGE = {
  0: "#e8edfc",
  100: "#bac9f7",
  200: "#8ca6f2",
  300: "#5e82ed",
  400: "#305ee8",
  500: "#1745cf",
  600: "#1235a1",
  700: "#0d2673",
  800: "#081745",
  900: "#030817",
};
export const SECONDARY_RED_RANGE = {
  100: "#fae8e8",
  200: "#f0b9b9",
  300: "#e68a8a",
  400: "#dc5c5c",
  500: "#d22d2d",
  600: "#a32323",
  700: "#751919",
  800: "#460f0f",
  900: "#170505",
};

export const SECONDARY_ORANGE_RANGE = {
  100: "#faf1e8",
  200: "#f0d5b9",
  300: "#e6b88a",
  400: "#dc9c5c",
  500: "#d2802d",
  600: "#a36423",
  700: "#754719",
  800: "#462b0f",
  900: "#170e05",
};

export const SECONDARY_PINK_RANGE = {
  100: "#fae8f1",
  200: "#f0b9d5",
  300: "#e68ab8",
  400: "#dc5c9c",
  500: "#d22d80",
  600: "#a32364",
  700: "#751947",
  800: "#460f2b",
  900: "#17050e",
};

export const GRAY_RANGE = {
  0: "#ffffff",
  100: "#f2f0f0",
  200: "#d7d2d2",
  300: "#bcb4b4",
  400: "#a29696",
  500: "#877878",
  600: "#695d5d",
  700: "#4b4343",
  800: "#2d2828",
  900: "#0f0d0d",
};

export const GREEN_RANGE = {
  300: "#94dca6",
  400: "#69ce82",
  500: "#3fc05e",
  600: "#319649",
  700: "#236b34",
};

export const YELLOW_RANGE = {
  300: "#efd282",
  400: "#e8c04f",
  500: "#e2ae1d",
  600: "#b08717",
  700: "#7d6010",
};

export const COLORS = {
  LOGO: PRIMARY_RANGE[400],
  BRAND: PRIMARY_RANGE[900],
  BACKGROUND: GRAY_RANGE[900],
  LIST_BULLET: SECONDARY_ORANGE_RANGE[200],
  GALLERY_BACKGROUND: SECONDARY_ORANGE_RANGE[300],
  BUTTON_INACTIVE_BG: GRAY_RANGE[200],
  BUTTON_ACTIVE_BG: PRIMARY_RANGE[800],
  BUTTON_INACTIVE_ICON: GRAY_RANGE[900],
  BUTTON_ACTIVE_ICON: PRIMARY_RANGE[200],
  GRAPH_ENDPOINT: GREEN_RANGE[400],
  GRAPH_COMBINE: SECONDARY_PINK_RANGE[300],
  GRAPH_SAUTE: PRIMARY_RANGE[500],
  GRAPH_OVEN: PRIMARY_RANGE[700],
  GRAPH_TRANSFER: GRAY_RANGE[500],
  GRAPH_KNIFE: GRAY_RANGE[400],
  GRAPH_COOK: PRIMARY_RANGE[600],
  GRAPH_NODE_APPLIANCE: GRAY_RANGE[700],
  GRAPH_NODE_CONTAINER: GRAY_RANGE[600],
  GRAPH_NODE_CONDIMENT: SECONDARY_ORANGE_RANGE[300],
  GRAPH_NODE_DAIRY: GRAY_RANGE[200],
  GRAPH_NODE_VEGETABLE: GREEN_RANGE[700],
  GRAPH_NODE_ICON_LIGHT: SECONDARY_ORANGE_RANGE[100],
  INSTRUCTIONS_COOK: PRIMARY_RANGE[600],
  INSTRUCTIONS_CUT_STYLE: SECONDARY_PINK_RANGE[300],
  INSTRUCTIONS_PREP: GRAY_RANGE[400],
  INSTRUCTIONS_INGREDIENT: SECONDARY_ORANGE_RANGE[400],
  INSTRUCTIONS_CONTAINER: GRAY_RANGE[300],
  INSTRUCTIONS_LIGHT_TEXT: GRAY_RANGE[100],
  INSTRUCTIONS_DARK_TEXT: GRAY_RANGE[100],
  INSTRUCTIONS_TIME: PRIMARY_RANGE[300],
  NAVIGATION_TEXT: GRAY_RANGE[900],
};

export const LIGHT_COLORS: ColorPalette = {
  LOGO: GRAY_RANGE[0],
  BRAND: PRIMARY_RANGE[900],
  BACKGROUND: SECONDARY_ORANGE_RANGE[100],
  SEARCH_BACKGROUND: PRIMARY_RANGE[600],
  TEXT: GRAY_RANGE[900],
  SIDEBAR_TEXT: GRAY_RANGE[0],
  NAV_BACKGROUND: PRIMARY_RANGE[300],
};

export const DARK_COLORS: ColorPalette = {
  LOGO: GRAY_RANGE[0],
  BRAND: GRAY_RANGE[900],
  BACKGROUND: GRAY_RANGE[900],
  SEARCH_BACKGROUND: GRAY_RANGE[900],
  TEXT: GRAY_RANGE[0],
  SIDEBAR_TEXT: GRAY_RANGE[0],
  NAV_BACKGROUND: GRAY_RANGE[300],
};

export function getColor(colorKey: keyof ColorPalette) {
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}
