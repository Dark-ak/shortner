import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      cyan: "hsl(180, 66%, 49%)",
      red: "hsl(0, 87%, 67%)",
      black: '#000',
      white: '#fff',
      gray: "hsl(0, 0%, 75%)",
      violet: {
        100: "hsl(257, 7%, 63%)",
        500: "hsl(257, 27%, 26%)",
        800: "hsl(260, 8%, 14%)",
      },
      blue: "hsl(255, 11%, 22%)"
    },
    fontFamily: {
      poppins: ['var(--font-poppins)']
    },
    backgroundImage: {
      shorten: "url(/bg-shorten-desktop.svg)",
      shortenM: "url(/bg-shorten-mobile.svg)",
      boost: "url(/bg-boost-desktop.svg)",
      boostM: "url(/bg-boost-mobile.svg)",
    },
  },
  plugins: [],
};
export default config;
