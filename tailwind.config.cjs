/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#292929",
      pureBlack: "#000000",
      confusedBlack: "#333333",
      grey: "#999999",
      blue: "#3341C1",
      green: "#3EA03B",
      lightGrey: "#F4F2F2",
      fadeLink: "#BCB7B7",
    },
    fontFamily: {
      switzer: ["switzer", "sans-serif"],
      serif: ["clash display", "sans-serif"],
      sentient: ["sentient", "serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [],
};
