/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'braintms-hero': "url('../public/braintmshero.jpg')",
      },
      colors: {
        'logo-teal': '#5ABFA6',
      },
    },
  },
  plugins: [],
}


