/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#fbc721',
        'secondary': '#1576fe',
        'title': '#3a3a3a',
        'text': '#676767',
        'disable': '#cbcbcb',

        'white': '#fefefe',
      }
    },
  },
  plugins: [],
}

