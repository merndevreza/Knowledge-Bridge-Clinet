/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
     fontFamily: {
       sulphur: ["Sulphur Point", "sans-serif"],
       asul: ["Asul", "serif"],
     },
    colors: {
      "theme-golden": "#DEA004",
      "theme-hover-golden": "#e39511ed",
      "theme-black": "#04102E",
      "theme-dark":"#0f172a",
      "theme-dark-top":"#1e293b",
      "theme-light":"#f4f4f4",
      "white":"#fff"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  
}

