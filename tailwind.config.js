/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px #E50914' },
          '50%': { textShadow: '0 0 40px #E50914, 0 0 60px #E50914' },
        }
      }
    },
  },
  plugins: [],
}
