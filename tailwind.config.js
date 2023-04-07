/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        transparent: "rgba(255, 255, 255, 0.04)",
        transparent6: "rgba(255, 255, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
