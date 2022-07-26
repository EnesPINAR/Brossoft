/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      heading: ['Secular One', 'sans-serif'],
      main: ['Poppins', 'sans-serif'],
      handwriting: ['Satisfy', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
