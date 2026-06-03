// tailwind.config.mjs
const tailwindConfig = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,mjs}', './components/**/*.{js,mjs}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'orbit': 'orbit 8s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
