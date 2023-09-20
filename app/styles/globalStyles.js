import { defineGlobalStyles } from "@pandacss/dev";

const globalStyles = defineGlobalStyles({
  "html, body": {
    color: "gray.900",
    lineHeight: "1.5",
    padding: 0,
    margin: 0,
  },
  body: {
    backgroundRepeat: "no-repeat",
    backgroundImage: "var(--gradient-background)",
  }
});

export default globalStyles;
