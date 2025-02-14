/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Add this to include the root HTML file
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Ensure it covers React/TS files if used
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'xs': '400px', // Custom breakpoint for small screens
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
};
