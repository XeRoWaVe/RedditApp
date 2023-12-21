/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'quicksilver': '#A6A6A6',
        'revolution': '#737373',
        'sumi-ink': '#595959',
        'nero': '#262626',
        'black-wash': '#0D0D0D'
      },
      boxShadow: {
        'new': '0px 0px 20px 20px black'
      }
    },
  },
  plugins: [],
}

