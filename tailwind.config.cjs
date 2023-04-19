/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/heroBackground.png')",
        'aboutus-pattern': "url('./src/assets/aboutusbackground.png')",
        'about-pattern': "url('./src/assets/abtbg2.png')"

       },
      colors: {
        primary: "#BCBCBD",
        
   
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "908px",
      md: "1060px",
      lg: "1200px",
      ilg: "1500px",

      xl: "1700px",
    },
  },
  plugins: [],
};
