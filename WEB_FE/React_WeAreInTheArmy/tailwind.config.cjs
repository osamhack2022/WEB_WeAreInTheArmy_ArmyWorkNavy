/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "main": "#F7EFE8",
        "secondary": "#A42116",
        "paper": "#F7F4F3",
        "introduce": "#E3CDC5h",
        "btn": "#F0823F"
      },
      fontFamily: {
        Euljiro: ["BMEULJIRO"],
        NotoSansKR: ["Noto Sans KR", "cursive"]
      },
      lineHeight: {
        '12': '3rem',
      }
    },
  },
  plugins: [],
};
