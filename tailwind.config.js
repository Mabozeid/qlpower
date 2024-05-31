/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      'sans': ["Raleway", "sans-serif"],
      'sans': ["Tajawal", "sans-serif"],
    },
    backgroundImage: {
      'hero-pic': "url('/public/electrician-changes-the-light-bulb-handyman-G5K7XVM.jpg')",
    }
  },
  },
  plugins: [],
}
