/** @type {import('tailwindcss').Config} */
/** 커스텀 폰트  */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        body: ['Noto Serif KR','serif']
      }
    },
  },
  plugins: [],
}

