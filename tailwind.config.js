/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep oxblood — section backgrounds needing contrast
        maroon: {
          950: '#2E0810',
          900: '#3A0B16',
          800: '#4A0E1D',
          700: '#5C1530',
          600: '#6E1E3D',
        },
        // Warm dark — primary dark backgrounds and body text
        charcoal: {
          950: '#110D0B',
          900: '#1A1412',
          850: '#221B18',
          800: '#2D2522',
          700: '#3D3330',
          600: '#524541',
        },
        // Warm off-white — light backgrounds
        cream: {
          50: '#FAF7F2',
          100: '#F5F0E8',
          200: '#EDE5D6',
          300: '#DDD0BD',
          400: '#C4B5A0',
          500: '#9E8E7A',
        },
        // Single accent — buttons, links, tags, highlighted words
        coral: {
          300: '#F08A6E',
          400: '#E8704F',
          500: '#E15B3F',
          600: '#C94A30',
          700: '#A83D27',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        accent: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
        label: '0.2em',
      },
      animation: {
        'spark-pulse': 'sparkPulse 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fade-up': 'fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        sparkPulse: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
