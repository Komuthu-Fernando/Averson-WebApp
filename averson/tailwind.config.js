/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './components/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/assets/LandingImage.png')",
      }
    },
  },
  plugins: [],
}