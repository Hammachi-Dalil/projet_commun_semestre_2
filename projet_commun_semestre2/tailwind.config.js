/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
          'montserrat' : ['Montserrat', 'sans-serif']
      },

      colors: {
        "couleur-dominante": "#ffffff",
        "couleur-tonique-1": "#3c5266",
        "couleur-tonique-2": "#b6fa8c",
        "couleur-tonique-3": "#333333"
       },

    },
  },
  plugins: [],
}


/*
{
  "colors": {
   "couleur dominante": "#ffffff",
   "couleur tonique 1": "#3c5266",
   "couleur tonique 2": "#b6fa8c",
   "couleur tonique 3": "#333333"
  },
  "fontSize": {
   "base": "1rem",
   "lg": "1.25rem",
   "xl": "1.5rem",
   "2xl": "2rem",
   "3xl": "3rem"
  },
  "fontFamily": {
   "raleway": "Raleway",
   "inter": "Inter",
   "montserrat": "Montserrat"
  },
  "borderRadius": {
   "none": "0",
   "xs": "0.3125rem",
   "sm": "0.625rem",
   "default": "1.184005618095398rem",
   "lg": "1.25rem",
   "xl": "2.625rem",
   "2xl": "3.125rem",
   "3xl": "4.029017925262451rem",
   "full": "9999px"
  }
 }

 */