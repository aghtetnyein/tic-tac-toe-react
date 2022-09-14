/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5BC0EB",
        hoverBlue: "#2F96C4",
        yellow: "#ffb703",
        hoverYellow: "#f7a800",
        red: "#DC5F53",
        hoverRed: "#D64537",
        dark: "#00171F",
        thinDark: "#04252F",
      },
    },
  },
  plugins: [],
};
