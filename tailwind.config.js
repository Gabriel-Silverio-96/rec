/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/module/home/*.{js,jsx,ts,tsx}",
    "./src/shared/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-recording-main": "#FC3939",
        "red-recording-dark": "#D80000",
        "purple-stop-recording-main": "#3D39FC",
     },  
     boxShadow: {
        "recording": "0px 0px 70px 40px #fc39394d",
        "recording-hover": "0px 0px 50px 10px #fc39394d",        
        "stop-recording": "0px 0px 70px 40px #3d39fc47",
        "stop-recording-hover": "0px 0px 50px 10px #3d39fc47",
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
