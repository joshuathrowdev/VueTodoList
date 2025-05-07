module.exports = {
  content: [
    "./index.html", // For any Tailwind classes in the root HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // For any Vue or JS files in teh src folder
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryCard: '#3b82f6', // tailwinds bg-blue-500 a light blue
      }
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

