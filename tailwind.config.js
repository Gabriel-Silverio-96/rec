/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/module/home/*.{js,jsx,ts,tsx}",
    "./src/shared/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "recording-main": "#3D39FC",
        "stop-recording-main": "#FC3939",
     },  
     boxShadow: {
        "recording": "0px 0px 70px 40px #3d39fc47",
        "recording-hover": "0px 0px 50px 10px #3d39fc47",        
        "stop-recording": "0px 0px 70px 40px #fc39394d",
        "stop-recording-hover": "0px 0px 50px 10px #fc39394d",
     },
     spacing: {
      "75vh": "75vh",
    }
    },
    fontFamily: {
      display: ["Manrope"]
    }
  },
  plugins: [],
}
