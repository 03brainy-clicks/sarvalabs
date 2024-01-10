/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#191414",
        secondary02:"#333",
        hover:'#1f1a1a',
        textPrimary:"#fff",
        textSecondary:"#b2b2b2",
        hr:"#B2B2B2",
        artist:"#2b2626"
      },
    },
  },
  plugins: [],
};
