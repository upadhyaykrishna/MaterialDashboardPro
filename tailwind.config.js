module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'grey': '#B2B9C6',
        'grey2': '#354766',
        'heading': '#7B809A',
        'dark':'#34343B',
        'line': '#F1F2F4',
        'white': '#FFFFFF',
        'line2': '#5C5C62',
        'dark2': '#252426',
        'black1' : '#344666'
      },
    },
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '992px'}
    }
  },
  plugins: [],
}
