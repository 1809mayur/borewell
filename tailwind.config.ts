import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-custom': 'linear-gradient(180deg, #fbc2eb 0%, #a6c1ee 33%, #f6d365 66%, #fda085 100%)',
          'gradient-custom-theme1': 'linear-gradient(90deg, #ff1d58 0%, #f75990 25%, #00ddff 55%, #a28089 100%)',
          'gradient-custom-theme2': 'linear-gradient(90deg, #a0d2eb 0%, #e5eaf5 25%, #d0bdf4 55%, #8458b3 70%, #a28089 100%)',
          'gradient-custom-theme3': 'linear-gradient(180deg, #51e2f5 0%, #9df9ef 25%, #edf756 55%, #ffa8b6 70%, #a28089 100%)',

      },
    },
  },
  plugins: [],
};
export default config;
