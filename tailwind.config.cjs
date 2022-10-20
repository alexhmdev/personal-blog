/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#091128',
        primary: '#9A3D42',
        secondary: '#AC3B40',
        accent: '#CB5950',
        light: '#EFEEEB',
      },
    },
  },
  plugins: [],
};
