/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/heroBackground.png')",
        'aboutus-pattern': "url('./src/assets/aboutusbackground.png')",
        'about-pattern': "url('./src/assets/abtbg2.png')",
        'event-pattern': "url('./src/assets/EVENT.png')",
        'event1-pattern': "url('./src/assets/EVENT1.png')",
        'event2-pattern': "url('./src/assets/EVENT2.png')",
        'event3-pattern': "url('./src/assets/EVENT3.png')",
        'event4-pattern': "url('./src/assets/EVENT4.png')",
        'event5-pattern': "url('./src/assets/EVENT5.png')",
        'travel-pattern' : "url('./src/assets/travelbg.png')",
        'location-pattern' : "url('./src/assets/Location1.png')",
        'Terminal-pattern' : "url('./src/assets/Terminal1.png')",
        'maplocation-pattern' :"url('./src/assets/maplocation.png')"


       },
       borderWidth: {
        '16': '16px',
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
