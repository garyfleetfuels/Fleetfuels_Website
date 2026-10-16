/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: '#f0fdf2',
            100: '#dcfce4',
            200: '#bbf7cb',
            300: '#86ef9e',
            400: '#5bb834',
            500: '#469B26', // Primary Brand Green from Fleet Fuels droplet
            600: '#377d1d',
            700: '#2c6319',
            800: '#264f19',
            900: '#204217',
            950: '#0d240a',
            DEFAULT: '#469B26',
          },
          charcoal: {
            50: '#f6f7f8',
            100: '#eceef0',
            200: '#d5d8dc',
            300: '#b2b8bf',
            400: '#87909a',
            500: '#646c76',
            600: '#4f555e',
            700: '#41464e',
            800: '#2D3136', // Secondary Dark Charcoal / Road Grey
            900: '#1f2226',
            950: '#131518',
            DEFAULT: '#2D3136',
          },
          accent: {
            light: '#EBF5E9',
            mint: '#D8F3DC',
            amber: '#F59E0B',
            blue: '#2563EB',
          },
        },
      },
      fontFamily: {
        sans: [
          'Outfit',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(70, 155, 38, 0.4)',
        'glow-green-sm': '0 0 12px -2px rgba(70, 155, 38, 0.35)',
        'premium': '0 20px 40px -15px rgba(45, 49, 54, 0.08), 0 0 1px 1px rgba(45, 49, 54, 0.04)',
        'card-hover': '0 25px 50px -12px rgba(70, 155, 38, 0.15)',
      },
    },
  },
  plugins: [],
};
