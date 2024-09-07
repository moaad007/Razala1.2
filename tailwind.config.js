/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'blue':'#363333',
          "sfer":"#D8CEB9"
          ,"khder":"#3B8B4C",
          "gris":"#B5B2B2"
        }
    },
      backgroundImage: {
        'hero-pattern': "url('./assets/razala bg.jpg')",
        screens: {
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }
    
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
        
  },
  plugins: [],
}
}