module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure all relevant files are included
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        "secondary-100": "#E2E2D5",
        "secondary-200": "#888883",
      },
    },
  },
  plugins: [],
};
