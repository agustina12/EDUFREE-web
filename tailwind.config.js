const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  //compiler lebih cepat pakai mode jit
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "img-contact": "url('/img/bg-contact-us.png')",
      },
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities ={
        
      }
    })
  ],
};
