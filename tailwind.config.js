module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'ClassName'
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
