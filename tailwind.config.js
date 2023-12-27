/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary-900': '#01293A',
      'primary-800': '#133D51',
      'primary-700': '#205066',
      'primary-600': '#30637C',
      'primary-500': '#3C718D',
      'primary-400': '#5886A0',
      'primary-300': '#749CB3',
      'primary-200': '#96B9CD',
      'primary-100': '#B8D6E7',
      'primary-50': '#DBEFFF',
      'secondary-900': '#9F8041',
      'secondary-800': '#C3A449',
      'secondary-700': '#D9BB4F',
      'secondary-600': '#EED157',
      'secondary-500': '#FEE15C',
      'secondary-400': '#FFE772',
      'secondary-300': '#FFEC89',
      'secondary-200': '#FFF0A9',
      'secondary-100': '#FFF6CA',
      'secondary-50': '#FFFCEA',
      'grey-900': '#0D0D0D',
      'grey-800': '#2E2E2E',
      'grey-700': '#4B4B4B',
      'grey-600': '#5E5E5E',
      'grey-500': '#858585',
      'grey-400': '#A6A6A6',
      'grey-300': '#CBCBCB',
      'grey-200': '#DFDFDF',
      'grey-100': '#ECECEC',
      'grey-50': '#F6F6F6',
      'white': '#ffffff',
      'black': '#000000',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      // backgroundImage: {
      //   'hero-image': "url('/src/assets/image/background.png')",
      // }
      boxShadow: {
        'primary': '2px 6px 4px 0px rgba(0, 0, 0, 0.12)',
        'primary-hover': '4px 10px 10px 0px rgba(0, 0, 0, 0.25)',
        'secondary' : '4px 10px 12px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}