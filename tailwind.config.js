module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./containers/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
      },
      backgroundImage: {
        form: "url('../public/images/login/Frame-letter.png')",
      },
      colors: {
        light: "#F5F5F5",
        dark: "#1E2229",
        "gray-1": "#F5F5F5",
        "gray-2": "#F2F1F2",
        "gray-3": "#AEAEAE",
        "gray-4": "#949db0",
        mainBlue: "#aae6f0",
        golden: "#FFD42A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

// #E9EFFB
