module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-4xl': { 'max': '1920px' },
        'max-3xl': { 'max': '1536px' },
        'max-2xl': { 'max': '1320px' },
        'max-1xl': { 'max': '1300px' },
        'max-xl': { 'max': '1280px' },
        'max-lg': {'max': '1024px'},
        'max-md': {'max': '768px'},
        'max-sm': {'max': '640px'},
        'max-xm': {'max': '576px'},
        'max-xms': {'max': '400px'},

        
        // '3xl': { 'max': '1920px' },
        // '2xl': { 'max': '1536px' },
        // '1xl': { 'max': '1320px' },
        // '1x1xl': { 'max': '1300px' },
        // 'xl': { 'max': '1280px' },
        // 'lg': { 'max': '1024px' },
        // 'md': { 'max': '768px' },
        // 'sm': { 'max': '640px' },
        // 'smx': { 'max': '400px' },
      },
      colors: {
        'white': '#FFF',
        'black': '#000',
        'cs-black-thin': '#2E2E2E',
        'cs-grey': '#222',
        'cs-green': '#01693a',
        'cs-blue': '#08121d',
        'cs-blue-dark': '#060e16',
      },
      fontFamily: {
        'font-bai': ['Bai Jamjuree', 'sans-serif'],
      },
      keyframes: {
        scale: {
          '0%': {
            opacity: '.5',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '0',
            transform: 'scale(1.8)',
          },
        },
      },
      animation: {
        scale: 'scale 1.5s ease-out infinite',
      },
    },
  },
  plugins: [],
}
