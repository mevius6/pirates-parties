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
        "gray-dark": "#273444",
        "gray": "#8492a6",
        "gray-light": "#d3dce6",
        // #EDEAE5 SW Snowbound
        // #EDECE6 SW 7005 Pure White
        // #FEFEFE French Standard White Kraft
        "white": "#EAE2D3", // French Newsprint White
        "black": "#21201F", // RISO Black
        "navy": "#003153", // Prussian Blue
        "lime": "#EDFF01", // Pantone TN Safety Yellow
        "pink": "#FF1659", // Pantone TN Diva Pink
        // "blue": "#0089B8", // Pantone TN Atomic Blue
        "orange": "#FF6F1E", // Pantone TN Clown Fish
        "lime-300": "#e3ed55", // RISO Light Lime
        "pink-300": "#ff48b0", // RISO Fluorescent Pink
        "orange-300": "#FF7477", // RISO Fluorescent Orange
        "blue": "#0074a2", // RISO Sea Blue
        // "cyan": "#FF1659",
        "teal": "#2f6165",
        "brown": "#573E3E", // SW 7580 Carnelian
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
        // tight: 1.25,
        tight: 1.15,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      fontFamily: {
        display: ['BlockPro', 'sans-serif'],
        displaycaps: [
          '"BlockPro", "sans-serif"',
          {
            fontFeatureSettings: '"case" 1, "cpsp" 1',
            // fontVariationSettings: '"opsz" 32'
          },
        ],
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
