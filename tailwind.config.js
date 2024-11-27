/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ACBF5',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        heading: ['"Montserrat Alternates"', 'sans-serif'],
        symbol: ['Material Symbols Rounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
