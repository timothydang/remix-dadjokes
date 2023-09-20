import { defineGlobalStyles } from "@pandacss/dev";

const globalStyles = defineGlobalStyles({
  body: {
    backgroundRepeat: "no-repeat",
    backgroundImage: "var(--gradient-background)",
  },
  a: {
    color: "var(--color-links)",
  },
});

export default globalStyles;
