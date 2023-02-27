/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "700px",
      md: "900px",
      lg: "1040px",
      xl: "1240px",
    },
    extend: {
      colors: {
        cardBorderColor: "#e3e3e3",
        lightBlue: "#01B4E4",
        tmdbDarkBlue: "#032541",
      },
      fontFamily: {
        sourceSansPro: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
