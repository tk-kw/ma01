/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        oga: '#EE7500',
        blc: '#131313',
        mabg: '#FAFAFA',
      },
      fontFamily: {
        noto: ['Noto Sans JP']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}