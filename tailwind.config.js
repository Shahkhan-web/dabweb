module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D547E",
        secondary: "#FC5E02",
      }
    },
  },
    plugins: [require("daisyui")],
}