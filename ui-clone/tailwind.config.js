/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors:{
        primary:"#10B981",
        CardColor:"#FFBA43"
      },
      fontFamily:{
        "outlinefont":["Londrina Outline","sans-serif"]
      }
    },
  },
  plugins: [],
}

