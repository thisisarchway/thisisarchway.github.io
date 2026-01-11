/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'accent': ['Codystar', 'cursive'],
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
