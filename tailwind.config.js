/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3799D4',
        },
        yellow: {
          500: '#EFC31E',
        },
        black: {
          400: '#231F20',
        }
      }
    },
  },
  plugins: [],
}

