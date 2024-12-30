/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': '#edfaff',
          '100': '#d7f2ff',
          '200': '#b8eaff',
          '300': '#87dfff',
          '400': '#4ecbff',
          '500': '#25aeff',
          '600': '#0e90ff',
          '700': '#0777ed',
          '800': '#0d5fc0',
          '900': '#115297',
          '950': '#10325b',
      },
    },
  },
  plugins: [],
}

}