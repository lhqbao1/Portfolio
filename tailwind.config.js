/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            black: {
                DEFAULT: '#000000',
                100: '#000319',                
            },
            customBlack: {
                100: '#000319',
              },
            white: '#FFFFFF',
        }
    },
  },
  darkMode: "class",
  plugins: [],
};
