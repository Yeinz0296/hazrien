/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/about/*.{js,ts,jsx,tsx,mdx}',
    './app/blog/*.{js,ts,jsx,tsx,mdx}',
    './app/data/*.{js,ts,jsx,tsx,mdx}',
    './app/iot/*.{js,ts,jsx,tsx,mdx}',
    './app/portfolio/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'old-paperPic': "url('/images/background.jpg')",
      },
      colors: {
        'old-paper': '#E0C9A6',
        'crystal': '#A6DAE0',
        'maximum-blue-purple': '#ACA6E0',
        'ink': '#161411',
        'old-paper-shade': {
          1: '#B3A185',
          2: '#9D8D74',
          3: '#867964',
          4: '#706553',
          5: '#5A5042',
          6: '#433C32',
          7: '#2D2821',
          8: '#161411',
        }
      },
      fontFamily:{
        'heading': []
      }
    },
  },
  plugins: [],
}