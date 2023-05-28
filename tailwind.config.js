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
      blue : "#3069FE",
      gray: "#666666",
      "light-gray": "#DEDEDE",
      "dark-gray" : "#4D4D4D",
      black: "#1A1919"
    },
  },
  plugins: [],
}
