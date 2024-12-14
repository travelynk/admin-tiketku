import * as preline from 'preline/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,edge}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#37517e",
        based: "#f6f9ff",
        white: "#ffffff",
      },
    },
  },
  plugins: [
    preline
  ],
};
