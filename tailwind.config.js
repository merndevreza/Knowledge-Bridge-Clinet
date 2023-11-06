/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
       sulphur: ["Sulphur Point", "sans-serif"],
       asul: ["Asul", "serif"],
     },
    colors: {
      "theme-black": "#04102E",
      "theme-golden": "#DEA004"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

