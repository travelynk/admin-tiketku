/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,edge}",
    './node_modules/flowbite/**/*.js'
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
  plugins: [require("daisyui")],
};
