module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'lato':['Lato','sans-serif'],
      'montserrat':['Montserrat','system-ui']
    },
    backgroundColor:theme=>({
    ...theme('colors'),
    'primary':'#004968',
    }),
    height:{
      '100':'30rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
