/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 3s ease-out',
      },
    },
  },
  plugins: [],
}

