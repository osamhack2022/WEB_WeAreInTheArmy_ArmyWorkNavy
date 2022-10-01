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
        "orrange": "#F0823F",
      },
      fontFamily: {
        Euljiro: ["BMEULJIRO"],
        NotoSansKR: ["Noto Sans KR", "cursive"]
      },
      lineHeight: {
        '12': '3rem',
      },
      fontWeight: {
        "hairline": 100,
        'extra-light': 100,
        "thin": 200,
        "light": 300,
        "normal": 400,
        "medium": 500,
        "semibold": 600,
        "bold": 700,
        "extrabold": 800,
        'extra-bold': 800,
        "black": 900,
      }
    },
  },
  plugins: [],
};
