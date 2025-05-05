module.exports = {
  content: [
    "./index.html", // For any Tailwind classes in the root HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // For any Vue or JS files in teh src folder
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

