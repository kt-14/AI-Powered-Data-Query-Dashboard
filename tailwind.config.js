/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0F172A",
        cardBg: "#1E293B",
        textPrimary: "#E2E8F0",
        accent: "#6366F1",
      },
    },
  },
  plugins: [],
};
