import { defineTextStyles } from "@pandacss/dev";

const textStyles = defineTextStyles({
  wavyLinks: {
    description: "This is wavy link style",
    value: {
      base: {
        textDecoration: "none",
      },
      _hover: {
        textDecoration: "underline",
        textDecorationStyle: "wavy",
        textDecorationThickness: "1px",
      },
    },
  },
});

export default textStyles;
