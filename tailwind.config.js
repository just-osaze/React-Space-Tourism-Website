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
    backgroundImage: {
      'home-mobile': "url('./assets/home/background-home-mobile.jpg')",
      'home-tablet': "url('./assets/home/background-home-tablet.jpg')",
      'home-desktop': "url('./assets/home/background-home-desktop.jpg')",
    },
  },
  plugins: [],
}

