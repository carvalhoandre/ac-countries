import { DefaultTheme } from "styled-components";

export const fontSize = {
  caption: "0.7rem",
  small: "0.8rem",
  default: "1rem",
  heading: "1.1rem",
  heading2: "1.2rem",
  heading4: "1.5rem",
  xl: "3rem",
};

export const fontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const grey = {
  darkest: "#1A1A1A",
  darker: "#404040",
  dark: "#666666",
  default: "#A6A6A6",
  light: "#CCCCCC",
  lighter: "#F2F2F2",
  lightest: "#F9F9F9",
  white: "#FFFF",
};

export const primary = {
  darkest: "#262626",
  dark: "#121212",
  default: "#262626",
  light: "#303030",
  lighter: "#5e5e5e",
};

export const palette = {
  grey,
  primary,
  fontSize,
  fontWeight,
};

const theme: DefaultTheme = {
  palette,
};

export default theme;
