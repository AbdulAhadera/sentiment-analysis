/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-gradient-start': '#A3C6FF',   // Light Blue (Gradient Start)
        'bg-gradient-end': '#D9E9FF',     // Very Light Blue (Gradient End)
        'bg-headers': '#00BFFF',          // Bright Blue (Header, Footer, CTA Button)
        'text-title': '#2C3E50',          // Dark Blue (Title Text)
        'text-links': '#00BFFF',          // Bright Blue (Links)
        'text-error': '#FFBB33',          // Soft Amber (Error Message Background)
        'text-normal': '#FFFFFF',         // White (Text, Button Text)
      },
      fontFamily: {
        'roboto': ['Roboto-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
