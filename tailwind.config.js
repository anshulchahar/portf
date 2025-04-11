module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000',  // Pitch black for dark mode
          lighter: '#121212',  // Slightly lighter black for cards
          accent: '#333333',   // Dark gray for subtle accents
        },
        light: {
          DEFAULT: '#f8f8f8',
          accent: '#e0e0e0',
        },
        primary: {
          DEFAULT: '#6d6d6d',
          dark: '#8e8e8e',
          light: '#ababab',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.dark'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.light'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
