module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tennis: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          accent: '#ccff00',
        },
        court: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#15803d',
          800: '#14532d',
          900: '#062817',
          950: '#02180d',
        },
        clay: {
          500: '#c2410c',
          600: '#9a3412',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.25)',
        glow: '0 0 25px -5px rgba(204, 255, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
