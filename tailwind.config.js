/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
        animation: {
        wiggle: 'wiggle 1s ease-out',
      },
      colors: {
        'dots-blue': '#6038FF',
        'dots-blue-2': '#582DFF',
        'card-bg': '#f3f3f3'
      },
      backgroundImage: {
        'hero-pattern': "url('../public/backgroundbranco.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'display': ['Popins'],
        'body': ['Popins'],
      }
    },
  },
  plugins: [],
}
