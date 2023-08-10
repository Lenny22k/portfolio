/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#9966CC'
      },
      backgroundImage: {
        'main-image': "url('./assets/background.png')",
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' }
        }
      },
      animation: {
        updown: 'updown 3s linear infinite'
      }
    }
  },
  plugins: []
}
