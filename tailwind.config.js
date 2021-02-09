const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: colors.red,
      yellow: colors.yellow,
      green: {
        light: "#58DAB4",
        DEFAULT: "#4DCEA8",
      },
      blue: "#2FA8B8",
      gray: colors.gray,
      silver: "#F5F7FB",
      aqua: {
        light: "#57DDD5",
        DEFAULT: "#58D6D2",
        dark: "#5DC1CF",
      },
      ocean: {
        DEFAULT: "#2FA8B8",
      },
    },
    fontFamily: {
      sans: ["rubik", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
