import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

export type SpaceTokens = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type Space = Record<SpaceTokens, string>;

const space = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "16px",
  4: "32px",
  5: "64px",
  6: "128px",
};

// add negative margins
Object.assign(
  space,
  Object.entries(space).reduce(
    (a, [key, val]) => ({
      ...a,
      [-1 * Number(key)]: `-${val}`,
    }),
    {}
  )
);

const palette = {
  primary: "#48bf91",
  primaryDark: "#0baa78",
  primaryLight: "#f8ffed",
  error: "#F4364C",
  black: "#000000",
  grayDarkest: "#323232",
  grayDarker: "#5B5B5B",
  grayDark: "#848484",
  gray: "#AAAAAA",
  grayLight: "#D4D2CF",
  grayLightest: "#F3F2EF",
  white: "#FFFFFF",
  lightGreen: "#BAE303",
  skyBlue: "#00B7EB",
  purpleDark: "#4A25AA",
  purple: "#963CBD",
  link0: "#0BAA78",
  shadow0: "rgba(0, 0, 0, 0.15)",
  shadow1: "rgba(0, 174, 199, 0.1)",
  shadow2: "rgba(0, 0, 0, 0.1)",
  shadow3: "rgba(0, 0, 0, 0.08)",
  hover0: "rgba(72, 191, 145, 0.1)",
  hover1: "#f7fcf9",
  border0: "#eee",
};

export const theme = createGlobalTheme(":root", {
  palette,
});
