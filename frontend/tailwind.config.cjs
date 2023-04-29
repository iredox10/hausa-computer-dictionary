/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-color": "#041238",
      "secondary-color": "#D9D9D9",
      'white': '#ffff',
      'red': '#FF0000'
    },
    extend: {},
  },
  plugins: [],
}
