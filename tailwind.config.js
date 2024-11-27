/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ACBF5",
        customBlue: "#005B6F",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        heading: ['"Montserrat Alternates"', "sans-serif"],
        symbol: ["Material Symbols Rounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
