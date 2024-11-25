/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const content = ["./src/**/*.{html,js,ts,tsx}"];
export const darkMode = 'class';

export const theme = {
  extend: {

    colors: {
      "gray-lightest": "#F1F1F1",
      "accent": "#00CCCC"
    },

    fontFamily: {
      'karla': ['Karla', 'sans-serif'],
      'DMSans': ['DMSans', 'sans-serif']
    }
  },
};


export const plugins = [
  plugin(function ({ addUtilities }) {
    addUtilities(scrollbar);
  }),
]; 

const scrollbar = {
  '.scrollbar-light': {
    '&::-webkit-scrollbar': {
      width: '7px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#F1F1F1',
      borderRadius: '9999px', // Fully rounded corners
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#E1E4E8',
      borderRadius: '9999px', // Fully rounded corners
    },
  },
  '.scrollbar-dark': {
    '&::-webkit-scrollbar': {
      width: '7px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#3C3F4325',
      borderRadius: '9999px', // Fully rounded corners
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#3C3F43',
      borderRadius: '9999px', // Fully rounded corners
    },
  },
};




