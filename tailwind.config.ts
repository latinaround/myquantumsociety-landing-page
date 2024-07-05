import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        primary: "#000000",
        secondary: "#598ead",
        naturalCharcoal: "#535353",
        naturalGray: "#F8F7FF"
      },
      boxShadow: {
        'right': '8px 0 15px -3px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
