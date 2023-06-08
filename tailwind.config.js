/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      blue : {
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
        60:"#666666",
        70:"#4D4D4D",
        80: "#333333",
        100: "#1A1919",
      },
      green: {
        10:'#EBFAE2;',
        30: "#B3E494",
        70: "#4F9C20",
      }
    },
  },
  plugins: [],
}
