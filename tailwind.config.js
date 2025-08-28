/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mb": "1100px",
        'custom': '1515px',
      },
      colors: {
        'ttblue': '#3652A7',
        'textPrimary': '#E7ECF7',
        'textSecondary': '#B2C2E1',
        'forexBlue': '#0052B4',
        'futuresGreen': '#65FD51',
        'ttorange': '#FF532D',
        'bgDark': '#0B111D',
        'ttelectricBlue': "#64C3E2",
        'secondary':'#717892',
        'primary': '#252831'
      },
    },
  },
  plugins: [],
};