import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        ink: "#222325",
        heading: "#222325",
        hover: "#1DBF73",
        accent: "#0F5533",
        pink: "#FF69B4",
        surface: "#f3f4f6",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
