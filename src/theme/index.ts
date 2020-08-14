// example theme.js

export type Theme = "light" | "dark" | "colour";
export const themes: Theme[] = ["light", "dark", "colour"];

type ColorScheme = {
  background?: string;
  shadow?: string;
  text?: string;
  primary?: string;
  primaryHigh?: string;
  primaryLow?: string;
  secondary?: string;
  secondaryHigh?: string;
  secondaryLow?: string;
};

function getColours(theme: Theme): ColorScheme {
  switch (theme) {
    case "dark":
      return {
        background: "#000",
        text: "#fff",
        primary: "#66FCF1",
        // primaryHigh: "#f6f6f9",
        // primaryLow: "#f6f6f9",
        secondary: "#C5C6C7",
        // secondaryHigh: "#240090",
        // secondaryLow: "#240090",
      };
    case "light":
      return {
        background: "#fff",
        text: "#000",
        primary: "#CCFFBF",
        // primaryHigh: "#f6f6f9",
        // primaryLow: "#f6f6f9",
        secondary: "#D3E3FC",
        // secondaryHigh: "#30c",
        // secondaryLow: "#30c",
      };
    case "colour":
      return {
        background: "#85DDCB",
        text: "#B28C8D",
        primary: "#41B3A3",
        // primaryHigh: "#f6f6f9",
        // primaryLow: "#f6f6f9",
        secondary: "#E27D60",
        // secondaryHigh: "#30c",
        // secondaryLow: "#30c",
      };

    default:
      return {
        background: "#fff",
        text: "#000",
        primary: "#3500D3",
        // primaryHigh: "#f6f6f9",
        // primaryLow: "#f6f6f9",
        secondary: "#240090",
        // secondaryHigh: "#240090",
        // secondaryLow: "#240090",
      };
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
    monospace: "Avenir Next",
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
