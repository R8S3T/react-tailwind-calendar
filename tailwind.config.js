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
        'my-grey': '#e0ebeb',
        'my-grey-2': '#85a6b1',
        'my-light-blue': '#79c2d0',
        'my-green-2': '#71a0a5'
      },
    },
  },
  plugins: [],
}

