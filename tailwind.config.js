module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
      backgroundImage: {
        form: "url('/images/login/Frame-letter.png')",
        rectangle: "url('/images/public/Rectangle.png')",
      },
      colors: {
        light: "#F5F5F5",
        dark: "#1E2229",
        "gray-1": "#F5F5F5",
        "gray-2": "#F2F1F2",
        "gray-3": "#AEAEAE",
        "gray-4": "#949db0",
        mainBlue: "#aae6f0",
        mainRed: "#E35757",
        mainGreen: "#8FE357",
        golden: "#FFD42A",
      },
      screens: {
        "2md": "890px",
        "3xs": "510px",
        "2xs": "440px",
        xs: "370px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
