const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        'freehold-green':'#E7F1EE',
        'freehold-dark':'#15803d',
        'freehold-light':'#69ddbf',
        'freehold-pink':'#d74daf',
        'freehold-blue':'#223a66'
    },
      fontSize: {
        base: '0.75rem', // Default font size (14px)
        lg: '1rem',       // Large font size (16px)
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
