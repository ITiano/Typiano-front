/** @type {import('tailwindcss').Config} */

const withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    return opacityValue !== undefined ? `rgba(var(${variableName}), ${opacityValue})` : `rgb(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./public/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
        type: ["'Nunito', sans-serif"],
      },
      backgroundImage: {
        form: "url('/images/login/Frame-letter.png')",
        rectangle: "url('/images/public/Rectangle.png')",
      },
      colors: {
        gray: {
          900: withOpacity("--gray-900"),
          800: withOpacity("--gray-800"),
          700: withOpacity("--gray-700"),
          600: withOpacity("--gray-600"),
        },
        red: {
          900: withOpacity("--red-900"),
          800: withOpacity("--red-800"),
        },
        green: {
          900: withOpacity("--green-900"),
        },
        primary: {
          900: withOpacity("--primary-900"),
        },
        dark: {
          900: withOpacity("--dark-900"),
        },
      },
      screens: {
        "2md": "890px",
        "3xs": "510px",
        "2xs": "440px",
        xs: "370px",
      },
    },
  },
  plugins: [],
};
