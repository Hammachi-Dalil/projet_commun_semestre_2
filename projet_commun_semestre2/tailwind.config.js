/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // rajouter les couleurs à utiliser
    },
    extend: {},
  },
  plugins: [],
}

