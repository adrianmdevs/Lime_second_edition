/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
      colors:{
        'button-color':'#75A774'
      },
      fontFamily:{
        'baloo':['Baloo Da 2','sans-serif']
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

