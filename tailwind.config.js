export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#69267f',
       
      },
      backgroundImage: {
        
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover', 'focus'], 
    },
  },
  plugins: [],
};
