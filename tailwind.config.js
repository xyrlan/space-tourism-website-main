/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'deskhome': "url('/images/background-home-desktop.jpg')",
          'tablethome': "url('/images/background-home-tablet.jpg')",
          'mobilehome': "url('/images/background-home-mobile.jpg')",
          'deskdestination': "url('/images/background-destination-desktop.jpg')",
          'tabletdestination': "url('/images/background-destination-tablet.jpg')",
          'mobiledestination': "url('/images/background-destination-mobile.jpg')",
          'deskcrew': "url('/images/background-crew-desktop.jpg')",
          'tabletcrew': "url('/images/background-crew-tablet.jpg')",
          'mobilecrew': "url('/images/background-crew-mobile.jpg')",
          'desktech': "url('/images/background-technology-desktop.jpg')",
          'tablettech': "url('/images/background-technology-tablet.jpg')",
          'mobiletech': "url('/images/background-technology-mobile.jpg')",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        
      },
    },
    fontFamily: {
      brunoace: ["Bruno Ace SC", "cursive"],
      genos: ["Genos", "sans-serif"],
      
    },
  },
  plugins: [],
}
