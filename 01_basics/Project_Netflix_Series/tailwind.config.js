/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Courier' : ["Courier Prime", "monospace"],
      'poppins' : ["Poppins", 'sans-serif']
    },
  },
  plugins: [],
}