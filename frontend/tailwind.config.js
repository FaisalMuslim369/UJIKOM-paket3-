/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'popins':"Poppins"
    },
    extend: {
      backgroundImage: {
        'loginBackground': "url('/src/assets/background1.png')",
        'loginBackground2': "url('/src/assets/background2.png')"
      },
    },
  },
  plugins: [],
}