/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#668ba4',
        'my-green': '#a7bcb9',
        'my-grey': '#e0ebeb'
      },
    },
  },
  plugins: [],
}

