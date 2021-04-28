module.exports = {
  purge: {
    content: ['public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#f3c614',
        'primary-black': '#353535',
        'primary-gray': '#6e6e6e',
        'secondary-blue': '#2dced6',
        'secondary-purple': '#9f58ff',
      },
      height: {
        '80': '20rem',
        '100': '25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}