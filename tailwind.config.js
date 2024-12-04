/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Saira", "sans-serif"],
        row: ["Rowdies", "sans-serif"],
      },
      colors: {
        p: "#4E596B",
      },
    },
  },
  plugins: [],
};
