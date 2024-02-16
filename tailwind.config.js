/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary-color': '#e5a371',
        'dark-color': '#2d313a',
        'light-color': '#fff6ee',
        'gray-color': '#8b8589'
      },
      fontFamily: {
        yekan: ['yekan'],
        rokh: ['rokh'],
      },
    },
  },
  plugins: [],
}

