import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "hsl(var(--background))",
        backgroundAccent: "hsl(var(--background-accent))",
        foreground: "hsl(var(--foreground))",
        header: "hsl(var(--header))",
        footer: "hsl(var(--footer))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        orange: "hsl(var(--orange))",
        scrollBackground: "hsl(var(--scroll-background))",
        scroll: "hsl(var(--scroll))",
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
        laptop: "1440px", // Extra-large screens
        gl: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
