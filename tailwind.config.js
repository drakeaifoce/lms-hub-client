const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      blue: {
        10: "#EEF3FF",
        50: "#3069FE",
      },
      black: {
        5: "#FAFAFA",
        10: "#F6F6F6",
        15: "#EDEDED",
        20: "#DEDEDE",
        30: "#C9C9C9",
        40: "#A5A5A5",
        50: "#808080",
        60: "#666666",
        70: "#4D4D4D",
        80: "#333333",
        100: "#1A1919",
      },
      green: {
        10: "#EBFAE2;",
        20: "#D9F0CA",
        30: "#B3E494",
        70: "#4F9C20",
      },
      red: {
        10: "#FDF2F2",
        50: "#EC5962",
      },
    },
    fontFamily: {
      sans: ["var(--font-fixel)", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
