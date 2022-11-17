/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*/index.html",
    "**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-main": "#414066"
      }
    },
  },
  plugins: [],
}
