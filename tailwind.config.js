/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "var(--color)",
        },
        gray: {
          DEFAULT: "var(--sec-color)",
          50: "var(--sec-background)",
          400: "var(--third-color)",
        },
        background: {
          DEFAULT: "var(--background)",
        },
      },
      fontFamily: {
        sans: ["Neue", "ui-sans-serif", "system-ui"],
        // Add other font families if needed
      },
    },
  },
  plugins: [],
};
