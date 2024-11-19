/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#03202d',
        'contrast': '#bdff16',
        'contrast1': '#042940',
        'contrast2': '#005C53',
        'contrast3': '#9FC131',
      },
      fontFamily: {
        'principal': ["Quicksand", 'sans-serif'],
        'principal2': ["Kirang Haerang", 'system-ui'],
      }
      
    },
  },
  plugins: [],
}
