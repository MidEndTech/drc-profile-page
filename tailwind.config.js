/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9D6636",
        secondary: "#BE894A",
        green: "#2C4D51",
        "dark-green": "#223A39",
      },
      translate: {
        '-0.25em': '-0.25em',
      },
      fontFamily: {
        Bolds: ["TheYearofTheCamel-Bold"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
