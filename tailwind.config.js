/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 以下の値は #6a1816 を基準値として ChatGPT に出力してもらったもの
        maroon: {
          50: '#f5e5e5',
          100: '#ecc6c5',
          200: '#d89b98',
          300: '#c26e6a',
          400: '#ad4043',
          500: '#932226',
          600: '#7a1c20',
          700: '#611619',
          800: '#480d13',
          900: '#2e070c',
        },
      },
    },
  },
  plugins: [],
}
