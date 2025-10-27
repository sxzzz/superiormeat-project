/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily: {
        sans: ["SF Pro", "sans-serif"],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        lora: ['Lora', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        anton: ['anton', 'sans-serif'],
      },
      colors: {
        primary: "var(--color-primary)",
      },
      backgroundImage: {
        texture:
            "url(/glow-texture.png), radial-gradient(var(--color-primary), transparent 70%)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
