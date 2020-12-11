module.exports = {
  purge: { enabled: false, content: ["src/**/*.tsx"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {},
      textColor: {
        gray: { 750: "#291507" },
      },
      backgroundColor: {
        gray: { 750: "#291507" },
        yellow: { 550: "#DEC68B" },
      },
      fontFamily: {
        mont: ["Montserrat"],
      },
      keyframes: {
        "to-left": {
          "0%": { transform: "translate(30px)", opacity: 0 },
          "100%": { transform: "translate(0)", opacity: 100 },
        },
      },
      animation: {
        "to-left": "to-left 0.3s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [],
};
