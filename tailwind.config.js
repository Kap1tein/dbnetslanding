module.exports = {
  purge: [
      '*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
      backgroundSize: {
        'size-200': '200% 200%',
        'size-1000': '1000% 1000%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
        'pos-500': '500% 500%',
      },
      colors: {
        cyan: '#00D6E0',
        bluegray: '#9BA0BB',
        pelorous: {
          DEFAULT: '#4BACC8',
          dark: '#378094',
        },
        aqua: {
          DEFAULT: '#ABDDDE',
          dark: '#72abab',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
