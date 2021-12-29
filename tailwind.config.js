module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'check': "url('./assets/check.svg')",
      },
      ringWidth: {
        'DEFAULT': '2px',
        '3': '3px',
        '6': '6px',
        '10': '10px',
      },
      zIndex: {
        '-m10': '-10',
      }
    },
    maxWidth:{
      "mcontent": "max-content"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '800px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
      '33': '4 0 25%'
    }
  },
  plugins: [require('tailwind-scrollbar')],
}
