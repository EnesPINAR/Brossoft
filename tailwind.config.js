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
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#D3AC5F',
        'border-main': '#E9E9E9',
        'border-dark': '#101010'
      }
    },
  },
  plugins: [],
}
