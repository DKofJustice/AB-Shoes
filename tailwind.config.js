/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#27313F",
        "yellow": "#E5FF7E"
      },
      fontFamily: {
        'lemon': ['Lemon', 'cursive']
      },
    },
  },
  plugins: [],
}

