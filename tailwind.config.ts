import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: {
          primary: "#ceeba8",
          secondary: "#5a7d62",
          gray: "#5e6c93",
          black: "#1a1a20",
        }
      },
      fontFamily: {
        'sans': ['"Rubik"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};
export default config;
