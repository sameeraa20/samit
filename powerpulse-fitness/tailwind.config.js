/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          red: '#DC2626',
          black: '#0F0F0F',
          gray: '#1F1F1F'
        }
      },
      fontFamily: {
        'gym': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

