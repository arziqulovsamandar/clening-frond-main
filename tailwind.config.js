/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn_color: "#0FC36D",
        bg_color: "#332942",
        big_color: "#F6F7ED",
        text_color: "#726A7E",
        plh_color: "#B7B4BB",
        bg_dark: "#021823",
      },
    },
  },
  plugins: [],
};
