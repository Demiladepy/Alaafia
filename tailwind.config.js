/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        background: "#FDFBF7", // Warn Cream
        primary: "#1A1A1A", // Black/Dark Gray for text
        secondary: "#E8F0E5", // Soft Green/Sage for cards
        tertiary: "#FCEBD8", // Soft Peach for alerts
        accent: "#E9F335", // Lime Yellow for buttons/highlights
        "accent-hover": "#dce62f",
        muted: "#9CA3AF",
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
