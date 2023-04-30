/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'old-paper': '#E0C9A6',
        'crystal': '#A6DAE0',
        'maximum-blue-purple': '#ACA6E0',
        'old-paper-shade': {
          DEFAULT: '#E0C9A6',
        }
      },
    },
  },
  plugins: [],
}
