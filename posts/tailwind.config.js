/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: 'media', // 'class'
      colors: {
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',

        "navy": "#003153", // Prussian Blue
        "black": "#21201F", // RISO Black
        // "white": "#FEFEFE", // French Standard White Kraft
        "white": "#EAE2D3", // French Newsprint White
        // SW's Snowbound #EDEAE5 & Pure White #EDECE6
        "lime": "#EDFF01", // Pantone TN Safety Yellow
        "pink": "#FF1659", // Pantone TN Diva Pink
        "blue": "#0089B8", // Pantone TN Atomic Blue
        // "cyan": "#FF1659",
        // "orange":"#F48288",

        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        none: 1,
        tight: 1.15,
        normal: 1.25
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        heavy: ['BlocHeavy', 'sans-serif'],
        block: ['BlockPro', 'sans-serif'],
        sans: ['Univers LT CYR', 'sans-serif'],
        serif: ['Albertus Nova', 'serif'],
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
