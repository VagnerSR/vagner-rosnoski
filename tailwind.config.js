/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#242424",
        light: "rgb(224 231 255)",
        primary: "#242424",
        primaryDark: "rgb(224 231 255)",
        secondary: "rgb(107 114 128)",
        secondaryDark: "rgb(165 180 252)",
        vivid: "rgb(91 33 182)",
        vividDark: "rgb(167 139 250)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
