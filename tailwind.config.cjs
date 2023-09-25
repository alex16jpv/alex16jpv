/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#323232",
        "primary-light": "#0D7377",
        "secondary-light": "#14FFEC",
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
