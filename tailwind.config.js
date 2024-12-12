/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        geist: ['Geist Sans', 'sans-serif'],
      },
      colors: {
        teal: {
          900: '#075e54', // Dark Teal
          800: '#128c7e', // Medium Teal
          700: '#25d366', // Light Teal
        },
        light: {
          100: '#dcf8c6', // Light Green
          200: '#ece5dd', // Light Gray
        },
      },
    },
  },
  plugins: [],
}
