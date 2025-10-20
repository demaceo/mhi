import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1F2937", // stone/wood neutral
          accent: "#2563EB",  // cool blue accent
        }
      }
    }
  },
  plugins: []
} satisfies Config;
