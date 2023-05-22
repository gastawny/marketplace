/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#FBFBFB', // prettier-ignore
        'primary-color': 'var(--primary)',
        'secondary-color': 'var(--secondary)',
        'bg-primary-color': 'var(--bg-primary)',
        'bg-secondary-color': 'var(--bg-secondary)',
        'bg-tertiary-color': 'var(--bg-tertiary)',
        'negative-color': 'var(--negative)',
        'positive-color': 'var(--positive)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
