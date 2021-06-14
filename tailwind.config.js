module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '-72': '18rem',
        '-18': '-18.5rem',
       },

       flex: {
        '1': '1 1 0%',
       '2': '2 2 0%',
      },
      zIndex: {
        '-1': '-1',
       },
       height: {
        '104': '36rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
