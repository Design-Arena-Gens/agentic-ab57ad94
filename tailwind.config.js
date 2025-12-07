/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        desert: "#F2C14E",
        dusk: "#8D6E63",
        ice: "#E0F7FA"
      },
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["'Fira Sans'", "sans-serif"]
      }
    }
  },
  plugins: []
};
