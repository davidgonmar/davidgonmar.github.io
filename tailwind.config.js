module.exports = {
  darkMode: 'class', 
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./pages/**/*.{html,md,markdown}",
    "./index.md",
    "./_posts/**/*.{md,markdown}",
    "./assets/js/**/*.js",
    "./_data/**/*.yml"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Helvetica", "Arial", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
}
