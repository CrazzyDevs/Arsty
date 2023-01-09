/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        fontFamily: {
      'switzer': ['switzer', 'sans-serif'],
      'clash': ['clash display', 'sans-serif'],
      'sentient': ['sentient', 'serif']
    },

    extend: {},
  },
  plugins: [],
}