import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#2A2D34",
      blue:"#312F48",
      white:"#f1f1f1",
      white1:"#F1F0F5",
      gray1: "#E3E1F0"
    },
  },
  plugins: [],
};
export default config;
