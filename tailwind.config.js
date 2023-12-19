/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#05C7F2',
        'cyber-black': '#01060D',
        'cyber-gray': '#0C1726',
        'cyber-pink': '#F2AB9B',
        'cyber-red': '#732C26'
      }
    },
  },
  plugins: [],
}

