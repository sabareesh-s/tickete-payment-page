/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gray8': '#f5f5f5',
        'gray2' : '#474747',
        'gray3' : '#595959',
        'buttonBlack' : '#0A0A0A',
        'ghostWhite' : '#F6F6F7',
        'green9': '#006642',
        'gray6' : '#d6d6d6',
        'pumpkin10' : '#7F2D0F',
        'pumpkin1' : '#FFF7ED'
      },
    },
  },
  plugins: [],
}
