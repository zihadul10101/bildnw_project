module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {

        mdi: ["Material Design Icons"],
        poppins: ["Poppins, sans-serif"],
      },
    },
    colors: ({ colors }) => ({
      ...colors,
      "primary-1":"#00B09E",
      "primary-3":"#344563",
      "primary-4":"#FFFFFF",
      "primary-6":"#2684FF",
      "primary-text":"#FFFFFF",
      "backgroundColor":"#1E1E1E",
      "primary-ash": {
        "light": "#EDF0F7",
        "300": "#E2E7F0",
        "400": "#4A5468",
        50: "blue",
      },
      "blue": {
        "normal": "#2767B2",
        "light": "#3A2884",
      },
      "inputBorder": "#CBD2E0",
      "borderColor": "#1A202C",
      "dark-gray": "#2D3648",
      "primary-2": "red",
      "button-1": "#6f531a",
      "button-2": "#d40511",
    }),
   
    
    screens: {
      "2xl": { max: "1535px" },
      "xl": { max: "1279px" },
      "lg": { max: "1023px" },
      "md": { max: "767px" },
      "sm": { max: "576px" },
      "xs": { max: "425px" },
    },
  },
  plugins: [],
};
