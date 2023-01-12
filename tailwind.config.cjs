/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#292929",
      grey: "#999999",
    },
    fontFamily: {
      switzer: ["switzer", "sans-serif"],
      serif: ["clash display", "sans-serif"],
      sentient: ["sentient", "serif"],
      stix: ["stix-two-text", "serif"],
    },
    extend: {
      fontFamily: {
        clash: "Clash",
      },
    },
  },
  plugins: [],
};
