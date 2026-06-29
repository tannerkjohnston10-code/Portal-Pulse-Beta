import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#07111f",
        "background-secondary": "#0b1728",
        "background-card": "#0f172a",
        "text-primary": "#f8fafc",
        "text-secondary": "#cbd5e1",
        "text-muted": "#64748b",
        "accent-primary": "#22d3ee",
        "accent-secondary": "#facc15",
        success: "#34d399",
        warning: "#fbbf24",
        danger: "#fb7185",
        info: "#60a5fa",
        ink: "#111827",
        field: "#f5f7fb",
        pulse: "#22d3ee",
        signal: "#fb7185",
        gold: "#facc15"
      },
      boxShadow: {
        panel: "0 18px 50px rgba(0, 0, 0, 0.28)",
        glow: "0 0 32px rgba(34, 211, 238, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
