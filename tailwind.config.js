/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Condensed','sans-serif']
      },
      backgroundImage: {
        'heroBg': 'url("./public/images/herobg.png")',
      }
    },
  },
  plugins: [],
}