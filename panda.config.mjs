import { defineConfig } from "@pandacss/dev";
import globalStyles from "app/styles/globalStyles";

export default defineConfig({
  globalCss: globalStyles,

  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "js",

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}"],

  presets: ["@pandacss/dev/presets", "@park-ui/presets"],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          grayPalette: {
            25: { value: "{colors.zinc.25}" },
            50: { value: "{colors.zinc.50}" },
            100: { value: "{colors.zinc.100}" },
            200: { value: "{colors.zinc.200}" },
            300: { value: "{colors.zinc.300}" },
            400: { value: "{colors.zinc.400}" },
            500: { value: "{colors.zinc.500}" },
            600: { value: "{colors.zinc.600}" },
            700: { value: "{colors.zinc.700}" },
            800: { value: "{colors.zinc.800}" },
            900: { value: "{colors.zinc.900}" },
            950: { value: "{colors.zinc.950}" },
          },
        },
      },
      semanticTokens: {
        colors: {
          accent: {
            default: {
              value: {
                base: "{colors.violet.500}",
                _dark: "{colors.violet.500}",
              },
            },
            emphasized: {
              value: {
                base: "{colors.violet.600}",
                _dark: "{colors.violet.400}",
              },
            },
            fg: {
              value: {
                base: "{colors.white}",
                _dark: "{colors.gray-palette.950}",
              },
            },
          },
          border: {
            accent: {
              value: {
                base: "{colors.violet.500}",
                _dark: "{colors.violet.500}",
              },
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
