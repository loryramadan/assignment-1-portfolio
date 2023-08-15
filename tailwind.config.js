/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily : {
      poppins: ["Poppins,sans-serif"],
      raleway: ["Raleway,sans-serif"],
      pacifico: ["Pacifico,cursive"],
    },
    colors : {
      'bright': '#F2F5F9',
      'orange': '#FF9C1A',
      'red': '#EC1B09',
      'cream': '#FFEBD1',
      'white': '#FFFFFF',
      'black': '#000000',
      'grey': '#E1E8EF',
      'cream-mid': '#FFE3BF',
    },
  },
  plugins: [],
}

