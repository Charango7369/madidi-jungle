/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jungle: {
          950: '#07150E', // Canopy deep night
          900: '#0D2B1D', // Primary deep forest
          850: '#123724',
          800: '#17432E',
          700: '#1E593D',
          600: '#2D7D56',
          500: '#3D996D',
          400: '#52B788',
          200: '#B7E4C7',
          100: '#E3EFE9',
          50: '#F2F7F4',
        },
        clay: {
          700: '#8A361A',
          600: '#A84724',
          500: '#C85A32', // Primary CTA button (WCAG AA Compliant contrast)
          400: '#DB724C',
          300: '#E89273',
          100: '#FCEFE9',
          50: '#FDF7F4',
        },
        sand: {
          600: '#B57C3E',
          500: '#DDA15E', // Warm canopy sun & stars
          400: '#E5B882',
          200: '#EAE4D7', // River silt background
          100: '#F5F2EB',
          50: '#FAF8F5',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
