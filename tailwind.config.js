/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow01: "#F7CF47",
        yellow02: "#DAB021",
        yellow03: "#C39800",
        white01: "#FFFFFF",
        green01: "#219847",
        red01: "#C30016",
        grey01: "#6B6B6B",
        black01: "#000000",
        grey02: "#F2F2F2",
      },
      fontFamily: {
        "noto-sans": ["var(--font-sans)"],
      },
      fontSize: {
        H1: "64px",
        H2: "58px",
        H3: "24px",
        subHead1: "32px",
        subHead2: "28px",
        body1: "18px",
        body2: "16px",
        body3: "12px",
        body4: "10px",
        subHeadEng1: "20px",
        bodyEngBold1: "16px",
        bodyEng2: "16px",
        bodyEng3: "12px",
      },
    },
  },
  plugins: [],
}

