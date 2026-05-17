//** @type {import('tailwindcss').Config} */
module.exports ={
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
          primary: '#FF6868',
          secondary: '#AECDC4',
          accent: '#FFE66D',      
    },
    fontFamily: {      
      'sans': ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
};

