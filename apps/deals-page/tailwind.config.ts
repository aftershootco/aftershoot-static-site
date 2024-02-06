import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1178px",
        xxl: "1330px",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out", // Define a custom animation
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 50s linear infinite",
        "fade-in-slow": "fadeIn .2s ease-out ",
        "bounce-x": "bounce-x .8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" }, // Start with opacity 0
          "100%": { opacity: "1" }, // End with opacity 1
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "bounce-x": {
          "50%": { transform: "scale(1.2, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      transitionProperty: {
        opacity: "opacity", // Define a custom transition for opacity
      },
      colors: {
        suvaGrey: "#8E8E8E",
        nightRider: "#323232",
        whiteSmoke: "#f2f2f2",
        cornflowerBlue: "#6599FF",
        gainsboro: "#dadada",
        danube: "#5990BF",
        seashell: "#FAF6F2",
        bone: "#FAF7F2",
        nero: "#1B1B1B",
        darkGray: "#A7A7A7",
        solitude: "#e4e7ec",
        rockSpray: "#9E3B22",
        tutu: "#FADBDB",
        spanishGreen: "#7A8775",
        eucalyptus: "#2FA36B",
        cinnabar: "#D83D3D",
        floralWhite: "#FAF7F2",
        outrageousOrange: "#FF693A",
        charcoal: "#414141",
        mayaBlue: "#73ABFF",
        grey: "#888888",
        tapestry: "#AB738E",
        lochinvar: "#4EA191",
        splash: "#ecd59e",
      },
      backgroundColor: {
        tonalBlue: "#E0EBFF",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "serif"],
      },
      letterSpacing: {
        0.3: "0.3em",
        "-0.3": "-0.03em",
      },
      fontSize: {
        xxs: "10px",
        "4.5xl": "44px",
      },
      backgroundImage: {
        noise: "url('../../public/shared/noise.png')",
        couple: "url('../../public/shared/couple-edit-3.svg')",
        whiteFade: "linear-gradient(to right,transparent 1%, white)",
        whiteFadeReverse: "linear-gradient(to right, white 1%, transparent)",
      },
    },
  },
  variants: {
    extend: {
      animationPlayState: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".paused": {
          "animation-play-state": "paused",
        },
        ".running": {
          "animation-play-state": "running",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
