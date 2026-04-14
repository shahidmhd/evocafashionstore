import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fffbea',
          100: '#fff3c0',
          200: '#ffe580',
          300: '#ffd040',
          400: '#f5b800',
          500: '#d49010',
          600: '#b07008',
          700: '#8a5406',
          800: '#663e04',
          900: '#422802',
          DEFAULT: '#d4a020',   /* warm amber — matches logo letter colour  */
          light:   '#f5d040',   /* bright face highlight                    */
          mid:     '#e8b020',   /* mid-tone glow                            */
          dark:    '#9a6808',   /* deep shadow / border                     */
          glow:    '#ff9800',   /* outer bloom — matches backlit warmth      */
        },
        obsidian: {
          DEFAULT: '#0a0a0a',
          50:  '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#212121',
          800: '#121212',
          900: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-left': 'slideLeft 0.7s ease forwards',
        'slide-right': 'slideRight 0.7s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        /* Amber-gold matching the illuminated EVOCA sign */
        'gold-gradient': 'linear-gradient(135deg, #d4a020 0%, #f5d040 40%, #e8b020 70%, #9a6808 100%)',
        'gold-shimmer':  'linear-gradient(90deg,  #d4a020 0%, #f5d040 50%, #d4a020 100%)',
        'gold-warm':     'linear-gradient(135deg, #ff9800 0%, #f5d040 50%, #d4a020 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'gold':    '0 4px 20px rgba(212,160, 32,0.35)',
        'gold-lg': '0 8px 40px rgba(212,160, 32,0.50)',
        'gold-glow': '0 0 30px rgba(255,152,  0,0.40), 0 0 60px rgba(212,140,0,0.25)',
        'dark':    '0 4px 20px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
