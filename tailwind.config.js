/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryPurple': '#9966CC'
      },
      backgroundImage: {
        'main-image': "url('./assets/background.png')"
      },
    },
  },
  plugins: [],
}

