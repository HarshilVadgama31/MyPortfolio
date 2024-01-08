/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // bg_color: "#171717",
        bg_color:"#000000",
        accent_color: "#6f39ec"
      },
    },
  },
  plugins: [],
}

