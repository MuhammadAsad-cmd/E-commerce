/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      screens: {
        'sm': '450px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',   // Large screens
        'xl': '1200px',  // Extra-large screens
        '2xl': '1440px', // Custom breakpoint
      },
    colors: {
      'light-green': '#e8ffeb',
      'light-gray':"#6b7280",
      'white':"#ffffff",
      'green':"#15803d",
      'black':"#020617",
      'red':"#dc2626",
      'border-light':"#d1d5db",
      'Logo':"#06b6d4",
      'bcolor':"#d1d5db",
      'buybtn':'#1e293b',
      'blue':'#1d4ed8',
    },
  },
  },
  plugins: [],
}