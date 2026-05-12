/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        cream: '#f7f0df',
        paper: '#fffaf0',
        acid: '#d8ff3e',
        coral: '#ff7f50',
        sky: '#8fd8ff',
      },
      boxShadow: {
        brut: '8px 8px 0 0 #000',
        mini: '4px 4px 0 0 #000',
        light: '4px 4px 0 0 #f7f0df',
      },
    },
  },
  plugins: [],
};
