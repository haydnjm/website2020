// example theme.js

export type Theme = "light" | "dark" | "colour";
export const themes: Theme[] = ["light", "dark", "colour"];

type ColorScheme = {
  background: string;
  text: string;
  link: string;
  visited: string;
  primary: string;
  secondary: string;
  codeBackground: string;
  codeBaseColor: string;
  string: string;
  number: string;
  comment: string;
  objectProperty: string;
  mongo: string;
  function: string;
};

export enum TransitionTimes {
  FAST = 300,
  MEDIUM = 600,
  SLOW = 900,
  SUPER_SLOW = 1200,
}

function getColours(theme: Theme): ColorScheme {
  const dark = {
    // Base
    background: "#0f0f0f",
    text: "#fafafa",
    primary: "#e38ac5",
    secondary: "#ffef61",
    link: "#ddd",
    visited: "#bbb",

    codeBackground: "#323232",
    codeBaseColor: "#fafafa",
    string: "#ffb080",
    number: "#f5f2d0",
    comment: "#7e7",
    objectProperty: "#9cebff",
    mongo: "#589636",
    function: "#f7f5a8",
  };
  const light = {
    // Base
    background: "#fafafa",
    text: "#0f0f0f",
    primary: "#e38ac5",
    secondary: "#ffef61",
    link: "#555",
    visited: "#777",

    codeBackground: "#ddd",
    codeBaseColor: "#0f0f0f",
    string: "#b22",
    number: "#8a8430",
    comment: "#070",
    objectProperty: "#22b",
    mongo: "#589636",
    function: "#f7f5a8",
  };
  const colour = {
    //Base
    background: "#e38ac5",
    text: "#ffef61",
    primary: "#41B3A3",
    secondary: "#E27D60",
    link: "#900",
    visited: "#090",

    codeBackground: "#ddd",
    codeBaseColor: "#0f0f0f",
    string: "#b22",
    number: "#2b2",
    comment: "#292",
    objectProperty: "#22b",
    mongo: "#589636",
    function: "#f7f5a8",
  };

  switch (theme) {
    case "dark":
    default:
      return dark;
    case "light":
      return light;
    case "colour":
      return colour;
  }
}
export const size = (input: number) => `${input * 6}px`;

export default (theme: Theme) => ({
  breakpoints: [
    "320px", // Mobile
    "481px", // Small tablet
    "769px", // Small laptop
    "1025px", // Medium laptop
    "1201px", // Everything above
  ],
  colors: getColours(theme),
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "'Source Code Pro', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
    small: "0 3px 6px -3px #00000066",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  variants: {
    blurred: {
      boxShadow: "0 0 50px 100px white",
      backgroundColor: "primary",
    },
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
    },
    link: {
      color: "primary",
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary",
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default",
    },
    secondary: {
      variant: "buttons.primary",
      color: "text",
      bg: "secondary",
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
});
