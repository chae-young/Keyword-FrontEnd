/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: {
        default: '1.25rem'
      },
      margin: {
        default: '1.25rem'
      },
      colors: {
        primary: '#48A1F7',
        primary2: '#FAEDAA',
        black: '#222',
        gray1: '#F3F3F3',
        gray2: '#F0F0F0',
        gray3: '#D9D9D9',
        gray4: '#767676'
      },
      fontSize: {
        h1: '1.75rem',
        h2: '1.25rem',
        h3: '1.125rem',
        body1: '1rem',
        body2: '0.875rem',
        body3: '0.75rem',
        body4: '0.625rem'
      },
      maxWidth: {
        default: '31.25rem'
      },
      boxShadow: {
        bottom: '-2px 10px 10px 0px rgba(237, 237, 237, 0.3)'
      }
    }
  },
  plugins: [require('daisyui')]
};
