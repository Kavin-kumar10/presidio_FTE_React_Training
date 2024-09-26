/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        primary:"#624E88",
        secondary:"#F5EFFF"
      },
      fontFamily:{
        first:["Crimson Text", "serif"],
        second:["Playwrite DE Grund", "cursive"]
      },
    },
  },
  plugins: [],
}

