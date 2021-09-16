module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Teko", "Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      fontFamily: {
        "sans-alt": ["Urbanist", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
