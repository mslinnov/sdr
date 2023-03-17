// tailwind.config.js
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './storage/framework/views/*.php',
      './resources/views/**/*.blade.php',
      './resources/js/**/*.{vue,js,ts,jsx,tsx}',
      "./index.html",
      "./node_modules/vue-tailwind-datepicker/**/*.js",
  ],
  theme: {
    extend: {
        colors: {
            "vtd-primary": colors.sky, // Light mode Datepicker color
            "vtd-secondary": colors.gray, // Dark mode Datepicker color
        },
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
