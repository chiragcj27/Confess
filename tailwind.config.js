/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
        serif: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [],
}

