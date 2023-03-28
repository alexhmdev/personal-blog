/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#000014",
        primary: "#9A3D42",
        secondary: "#AC3B40",
        accent: "#CB5950",
        light: "#EFEEEB",
        "light-primary": "#416dea",
      },
    },
  },
  plugins: [],
};
