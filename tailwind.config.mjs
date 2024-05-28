import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "degular-medium": ["Degular-Medium", ...defaultTheme.fontFamily.sans],
        "degular-semibold": [
          "Degular-Semibold",
          ...defaultTheme.fontFamily.sans,
        ],
        "urbaneRounded-medium": ["UrbaneRounded-Medium"],
      },
    },
  },
  plugins: [],
};
