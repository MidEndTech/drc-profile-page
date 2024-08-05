/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9D6636",
        secondary: "#BE894A",
        green: "#2C4D51",
        "dark-green": "#223A39",
      },
    },
  },
  plugins: [],
};

