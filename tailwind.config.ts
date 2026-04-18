import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf8f3",
          100: "#f1ece2"
        },
        ink: {
          800: "#1f1f1f",
          600: "#4a4a4a"
        },
        accent: {
          DEFAULT: "#6f5f4d",
          soft: "#d8cfc3"
        }
      },
      boxShadow: {
        card: "0 8px 30px rgba(15, 15, 15, 0.08)"
      },
      borderRadius: {
        premium: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
