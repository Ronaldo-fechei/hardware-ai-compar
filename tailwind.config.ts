import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00E5FF",
          secondary: "#7B2FFF",
          bg: "#0A0C10",
          card: "#111318",
        },
        // Paleta do design v5
        bg: "#0A0C10",
        surface: "#111318",
        surface2: "#181B22",
        borderc: "#1E2230",
        accent: "#00E5FF",
        muted: "#5A6070",
        label: "#8A92A6",
        textc: "#E8EAF0",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 229, 255, 0.45)",
        "glow-purple": "0 0 40px -10px rgba(123, 47, 255, 0.5)",
      },
      backgroundImage: {
        "grid-tech":
          "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
