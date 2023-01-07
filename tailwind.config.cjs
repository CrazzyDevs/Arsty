/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        fontFamily: {
      'switzer': ['switzer', 'sans-serif'],
      'serif': ['clash display', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}