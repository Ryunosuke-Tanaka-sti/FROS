/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        main: {
          500: '#5AAFE1',
        },
        text: '#384955',
      },
    },
  },
  plugins: [],
};
