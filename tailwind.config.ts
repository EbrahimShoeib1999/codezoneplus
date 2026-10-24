import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#A3E635",
          "lime-hover": "#bef264",
          "lime-dark": "#65a30d",
          dark: "#0B0F12",
          surface: "#1E232A",
          card: "#14181F",
          muted: "#9CA3AF",
          line: "rgba(163, 230, 53, 0.15)",
        },
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)", "sans-serif"],
        ibm: ["var(--font-ibm-plex-sans-arabic)", "sans-serif"],
        sans: ["var(--font-ibm-plex-sans-arabic)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
