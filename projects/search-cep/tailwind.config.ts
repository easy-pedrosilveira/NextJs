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
      black: "#0B1623",
      blue: "#0160F7",
      yellow: "#EEE82C",
      green: "#53A548",
      white: "#e5e5e5",
      white1: "#F1F0F5",
      gray1: "#4C5B6B",
    },
  },
  plugins: [],
};
export default config;
