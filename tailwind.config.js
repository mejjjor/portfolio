module.exports = {
  // ... other config
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-delay": "fadeIn 1s ease-in-out 0.5s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
