/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 以下の値は #6a1816 を基準値として ChatGPT に出力してもらったもの
        maroon: {
          50: '#f2d8d6',
          100: '#e6b1ad',
          200: '#d98a83',
          300: '#cc6359',
          400: '#bf3c30',
          500: '#a11e14',
          600: '#6a1816',
          700: '#541317',
          800: '#3f0e18',
          900: '#2b0a0e',
        },
      },
    },
  },
  plugins: [],
}
