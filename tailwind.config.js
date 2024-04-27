export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#69267f',
        'blur-purple': '#875199',
        'dark-blue': '#141438',
      },
      backgroundImage: {

      },
      screens: {
        '3xl': '1600px',
        '4xl': '1800px',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['hover', 'focus'],
    },
  },
  plugins: [],
};
