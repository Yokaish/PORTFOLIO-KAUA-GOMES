/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-header': "url('../img/header-background.png')",
        'custom-technologies-background': "url(../img/technologies-noise.png)",
        'custom-footer-background': "url(../img/footer-noise-background.png)",
      },
      colors: {
        'custom-white': '#C8C8C8', // Cor personalizada para texto
        'custom-dark-gray': '#202020',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], // Adiciona a fonte Roboto ao Tailwind
      },
      height: {
        '85vh': '86.7vh', // Adiciona a classe h-80vh para altura de 80% da altura da viewport
      },
    },
  },
  plugins: [],
}
