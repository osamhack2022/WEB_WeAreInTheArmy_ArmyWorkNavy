/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "main": "#F7EFE8",
        "seconddary": "#A42116",
        "paper": "#F7F4F3",
        "introduce": "#E3CDC5h"
      },
      fontFamily: {
        NotoSansKR: ["Noto Sans KR", "cursive"]
      }
    },
  },
  plugins: [],
};
