/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        main: {
          gris: "#F9F9F9",
          titulo: "#19596D",
          "bg-light":"#C7E3EC",
          "bg-medium":"#95B7C3",
          "bg-dark":"#2CA1C5"
        },
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
