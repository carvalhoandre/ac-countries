import { DefaultTheme } from "styled-components";

export const fontSize = {
  caption: "0.7rem",
  small: "0.8rem",
  default: "1rem",
  heading: "1.1rem",
  heading2: "1.2rem",
  heading4: "1.5rem",
  xl: "2.6rem",
};

export const grey = {
  darkest: "#1A1A1A",
  darker: "#404040",
  dark: "#666666",
  default: "#A6A6A6",
  light: "#CCCCCC",
  lighter: "#F2F2F2",
  lightest: "#FCFCFC",
  white: "#FFFF",
};

export const primary = {
  darkest: "#3F3D56",
  dark: "#363280",
  default: "#5650CC",
  light: "#6C63FF",
  lighter: "#B4B0FF",
};

export const palette = {
  grey,
  primary,
  fontSize,
};

const theme: DefaultTheme = {
  palette,
};

export default theme;
