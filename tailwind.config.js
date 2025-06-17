/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
        'floating3d': 'floating3d 4s ease-in-out infinite',
        'rainbow-flow': 'rainbow-flow 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'morphing': 'morphing 8s ease-in-out infinite',
        'pulse-purple': 'pulse-purple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floating3d: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'translateY(-15px) rotateX(5deg) rotateY(5deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(0deg) rotateY(10deg)' },
          '75%': { transform: 'translateY(-15px) rotateX(-5deg) rotateY(5deg)' },
        },
        'rainbow-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        morphing: {
          '0%, 100%': { 
            'border-radius': '50% 30% 70% 40%',
            'transform': 'rotate(0deg)'
          },
          '25%': { 
            'border-radius': '30% 70% 40% 50%',
            'transform': 'rotate(90deg)'
          },
          '50%': { 
            'border-radius': '70% 40% 50% 30%',
            'transform': 'rotate(180deg)'
          },
          '75%': { 
            'border-radius': '40% 50% 30% 70%',
            'transform': 'rotate(270deg)'
          },
        },
        'pulse-purple': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 