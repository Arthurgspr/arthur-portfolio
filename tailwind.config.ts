import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050506",
          900: "#0B0B0D",
          800: "#131317",
          700: "#1C1C22",
        },
        ink: {
          100: "#F5F5F7",
          300: "#C7C7CE",
          500: "#8E8E96",
          700: "#5B5B62",
        },
        accent: {
          green: "#22C55E",
          blue: "#3B82F6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "accent-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(34,197,94,0.16) 0%, rgba(59,130,246,0.10) 45%, rgba(0,0,0,0) 75%)",
        "accent-line":
          "linear-gradient(90deg, #22C55E 0%, #3B82F6 100%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(0,0,0,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
