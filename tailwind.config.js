/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      colors,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      "light-purple": "#6366f1",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "strong-cyan": "#26c0ab",
      "very-dark-cyan": "#00494d",
      "dark-grayish-cyan": "#5e7a7d",
      "grayish-cyan": "#7f9c9f",
      "light-grayish-cyan": "#c5e4e7",
      "very-light-grayish-cyan": "#f4fafa",
      "light-cyan": "	#458c7e",
      "very-light-cyan": "#8bc1b1",
      "light-grayish-blue": "#c8c8cb",
      "very-light-gray": "#fafafa",
    },
    extend: {
      screens: {
        md: "426px",
        lg: "1440px",
      },
      dropShadow: {
        "2xl": "0 18px 18px rgb(0 0 0 / 0.30)",
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.40)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "100%": "100%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
