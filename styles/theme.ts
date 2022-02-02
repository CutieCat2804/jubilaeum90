import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

export default createBreakpoints({
  sm: "512px",
  md: "600px",
  lg: "768px",
  xl: "992px",
  "2xl": "1200px",
});

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: "#092955",
      inverse: "#ffffff",
      cta: "#841a1a",
      "cta-hover": "#5e1212",
      "cta-focus": "#841a1a",
      "cta-active": "#5e1212",
      background: "#092955",
      "background-inverse": "#ffffff",
      required: "#d93025",
    },
  },
  textStyles: {
    "text-2xs": {
      fontSize: "16px",
      color: "primary",
      lineHeight: "145%",
    },
    "text-xs": {
      fontSize: "20px",
      color: "primary",
      lineHeight: "145%",
    },
    "text-xs-bold": {
      fontSize: "20px",
      color: "primary",
      lineHeight: "145%",
      fontWeight: "bold",
    },
    "text-s": {
      fontSize: "24px",
      color: "primary",
      lineHeight: "145%",
    },
    "text-s-bold": {
      fontSize: "24px",
      color: "primary",
      lineHeight: "145%",
      fontWeight: "bold",
    },
    "text-m": {
      fontSize: "28px",
      color: "primary",
      lineHeight: "145%",
    },
    "heading-m": {
      fontSize: "32px",
      color: "primary",
      lineHeight: "145%",
      fontWeight: "bold",
    },
    "heading-m-uppercase": {
      fontSize: "32px",
      color: "primary",
      lineHeight: "145%",
      fontWeight: "bold",
      textTransform: "uppercase",
    },

    "heading-l-uppercase": {
      fontSize: "40px",
      color: "primary",
      lineHeight: "145%",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
});
