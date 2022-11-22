/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/module/home/*.{js,jsx,ts,tsx}",
    "./src/shared/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Manrope"]
    }
  },
  plugins: [],
}
