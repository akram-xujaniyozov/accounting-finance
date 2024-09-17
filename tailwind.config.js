module.exports = {
  content: ["./public/*.html", "./src/**/*.{ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        darkerblue: "#151d2d",
        darkenblue: "#263149",
        lightgray: "#eff1f2",
        lightengray: "#f0f1f3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
