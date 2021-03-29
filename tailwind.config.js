module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'abril': ['"Abril Fatface"', 'cursive'],
        'cuerpo': ['"Andika"', 'sans-serif'],
        'title': ['"Fredoka One"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
