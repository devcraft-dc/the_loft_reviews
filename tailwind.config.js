/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '400px'
    },
    colors: {
      'main-black': '#2C2C2C',
      'secondary-white': '#E5E5E5',
      gray: colors.gray,
      black: colors.black,
      white: colors.white
    },
    extend: {},
  },
  plugins: [],
}