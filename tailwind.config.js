module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      lato: ["Inter var", "sans-serif"],
      montserrat: ["Inter var", "system-ui"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#004968",
      "primary-dark": "#003850",
      "primary-light": "#337c9b",
      secondary: "#ffff00",
      "secondary-light": "#ffff66",
      "secondary-dark": "#c6c600",
    }),
    height: {
      100: "30rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
