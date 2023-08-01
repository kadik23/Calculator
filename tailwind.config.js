/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"
,"./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")] ,
  safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    darkMode: "class"
}

