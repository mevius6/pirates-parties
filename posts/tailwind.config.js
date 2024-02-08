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
        "red": "#F65058", // RISO Scarlet
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
        tightest: '-.075em',
        tighter: '-.06em', // ~ .96px
        // tighter: '-.05em',
        // tighter: '-.04em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      lineHeight: {
        cap: '1cap',
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
        displayWide: [
          '"Nickel Gothic", "sans-serif"',
          {
            fontFeatureSettings: '"case" 1, "cpsp" 1',
            // Axes: 25–150, -15–15
            fontVariationSettings: '"wdth" 150, "slnt" -15', // Regular
          },
        ],
        displayConde: [
          '"Nickel Gothic", "sans-serif"',
          {
            fontFeatureSettings: '"case" 1, "cpsp" 1',
            // Axes: 25–150, -15–15
            fontVariationSettings: '"wdth" 50, "slnt" 0', // Condensed
          },
        ],
        displayNarrow: [
          '"Nickel Gothic", "sans-serif"',
          {
            fontFeatureSettings: '"case" 1, "cpsp" 1',
            // Axes: 25–150, -15–15
            fontVariationSettings: '"wdth" 75, "slnt" -15', // Narrow
          },
        ],
        serif: [
          '"Roslindale", "serif"',
          {
            fontFeatureSettings: '"case" 0, "cpsp" 0',
            // Axes: 9–48, 200–900, 0–1
            fontVariationSettings: '"opsz" 11, "wght" 400, "ital" 0', // Text Regular
          },
        ],
        serifDeckNarrowSemi: [
          '"Roslindale", "serif"',
          {
            fontFeatureSettings: '"case" 0, "cpsp" 0',
            // Axes: 9–48, 200–900, 0–1
            fontVariationSettings: '"opsz" 16, "wght" 600, "ital" 0', // Deck Narrow Regular
          },
        ],
        serifDeckNarrow: [
          '"Roslindale", "serif"',
          {
            fontFeatureSettings: '"case" 0, "cpsp" 0',
            // Axes: 9–48, 200–900, 0–1
            fontVariationSettings: '"opsz" 16, "wght" 400, "ital" 0', // Deck Narrow Regular
          },
        ],
        serifDisplayConde: [
          '"Roslindale", "serif"',
          {
            fontFeatureSettings: '"case" 0, "cpsp" 0',
            // Axes: 9–48, 200–900, 0–1
            fontVariationSettings: '"opsz" 48, "wght" 300, "ital" 0', // Display Condensed Light
          },
        ],
        caps: [
          '"Neue Haas Unica W1G", "sans"',
          {
            fontFeatureSettings: '"case" 1, "cpsp" 1',
          },
        ],
        sans: ['Neue Haas Unica W1G', 'sans-serif'],
        // sans: ['Univers LT CYR', 'sans-serif'],
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
