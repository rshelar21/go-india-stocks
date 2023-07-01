/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow : {
        'inner' : 'inset 0 2px 4px 0 rgb(0 0 0 / 0.6)',
        'feed' : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      },
      colors : {
        blue_dark : "#093967",
      },
      spacing : {
        md_y : "45%",
        xl_y : "55%"
      },
    },
  },
  plugins: [],
}
