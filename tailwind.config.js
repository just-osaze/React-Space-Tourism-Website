/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    // screens: {
    //   mobile: '375px',
    //   tablet: '768px',
    //   desktop: '1440px',
    // },
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1044px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      skyBlue: '#D0D6F9',
      darkBlue: '#0B0D17',
      gray: '#D9D9D9', 
      white: '#FFFFFF',
    },
    backgroundImage: {
      'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
      'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
      'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
      'destination-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
      'destination-tablet': "url(./assets/background-destination-tablet.jpg)",
      'destination-desktop': "url(./assets/background-destination-desktop.jpg)",
    },
  },
  plugins: [],
}

