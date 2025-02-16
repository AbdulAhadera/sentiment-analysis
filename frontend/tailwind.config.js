/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-gradient-start': '#f9f7f7',   // Light White/Off-White (Gradient Start)
        'bg-gradient-end': '#d4e2f3',     // Soft Blue (Gradient End)
        'headers': '#4e82b2',             // Medium Blue (Header, Footer, CTA Button)
        'text-title': '#0d2d4d',          // Dark Blue (Title Text)
        'links': '#4e82b2',          // Medium Blue (Links)
        'text-error': '#F44336',          // Red (Error Message Background)
        'text-normal': '#333333',         // Dark Gray (Text, Button Text)
        'box': '#FFFFFF',                 // White (Form and Response Boxes)
        'box-shadow': '#E0E0E0',           // Light Gray (Box Shadows)
        'button-hover': '#4e82b2',        // Medium Blue (Button Hover)
      },
      fontFamily: {
        'roboto-black': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}