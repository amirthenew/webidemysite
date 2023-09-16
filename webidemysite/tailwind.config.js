/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors:{...colors,
    'darkcolor' : '#212121',
    'webidemy' : '#fea300'
    },
    extend: {},
  },
  plugins: [],
}