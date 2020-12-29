module.exports = {
  purge: { enabled: false, content: ["src/**/*.tsx"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {},
      spacing: {
        68: "17rem",
        29: "7.25rem",
        37: "9.25rem",
      },
      textColor: {
        gray: { 250: "#E0E0E0", 550: "#544439", 750: "#291507" },
      },
      backgroundColor: {
        gray: { 250: "#E0E0E0", 550: "#544439", 750: "#291507" },
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
      gridTemplateColumns: {
        "2-auto": "auto auto",
        "2-info": "190px auto",
      },
      gridTemplateRows: {
        "2-auto": "auto auto",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
