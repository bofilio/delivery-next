module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#503E9D",
        secondary: "#FB6D3A",
        success: "#419D3E",
        error: "#FF0000",
        warning: "rgb(255, 189, 38)",
        gray: {
          normal: "#A3A3A4",
          16: "rgba(163, 163, 164, 0.16)",
          32: "rgba(163, 163, 164, 0.32)",
        },
        dark: "#2D2D2D",
        light: "#F7F7F7",
        text: {
          light: "#F7FAFC",
          gray: "#626264",
          dark: "#182135",
        },
        transparent: {
          primary: "rgba(80, 62, 157, 0.1)",
          secondary: "rgba(251, 109, 58, 0.1)",
          success: "rgba(65, 157, 62, 0.1)",
          error: "rgba(255, 0, 0, 0.1)",
          warning: "rgba(250, 205, 93, 0.1)",
          dark: "rgba(0, 0, 0, 0.16)",
        },
      },
      height: {
        160: "40rem",
        168: "42rem",
      },
      fontSize: {
        "2xs": "10px",
      },
      boxShadow: {
        big: "0px 32px 96px -8px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
