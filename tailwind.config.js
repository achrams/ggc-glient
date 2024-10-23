/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        'spin-horizontal': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'spin-horizontal': 'spin-horizontal 10s linear infinite',
      },
    },
  },
  plugins: [

  ],
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
}

