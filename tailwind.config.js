/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          light: '#4D94DB',
          dark: '#004C99',
        },
        secondary: {
          DEFAULT: '#F5F5F7',
          light: '#FAFAFA',
          dark: '#E5E5E7',
        },
        accent: {
          DEFAULT: '#FF9500',
          light: '#FFB04D',
          dark: '#CC7600',
        },
        success: {
          DEFAULT: '#34C759',
          light: '#70D989',
          dark: '#248A3D',
        },
        warning: {
          DEFAULT: '#FF9500',
          light: '#FFB04D',
          dark: '#CC7600',
        },
        error: {
          DEFAULT: '#FF3B30',
          light: '#FF6B62',
          dark: '#CC2F26',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};