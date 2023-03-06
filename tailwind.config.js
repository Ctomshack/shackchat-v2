/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'sent': '#16b67c',
      'received': '#1b1927',
      'background' : '#323338',
      'sidebar' : '#303137',
      'loginCard': '#2a2d31',
      'google': '#4285F4',
      'header': '#f1f1f2',
      'headerText': '#fbfbfb',
      'input': '#262432',
      'inputFocus': '#232428',
      'green': '#19a873',
      'displayName': '#7a7e81',
      'sendInput': '#1c1a28',
      'iosBlue': '#3378f6',
      'inputRing': '#d2d2d5',
    },},
  },
  plugins: [],
}