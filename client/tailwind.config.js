/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'xtreet-gradient': `
          radial-gradient(
            circle at bottom right,
            #f3a8d3 0%,
            #9f40a0 25%,
            #5c1a78 45%,
            #31004f 65%,
            #1c0045 85%,
            #0f1b4c 100%
          )
        `,
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out"
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        xtreetGlow: "0 0 10px #f70cf0, 0 0 20px #04F7E6"
      },
    },
  },
  plugins: [function ({ addUtilities }) {
      addUtilities({
        '.xtreet-blur': {
          position: 'absolute',
          bottom: '-8rem',
          right: '-6rem',
          width: '600px',
          height: '600px',
          backgroundColor: '#a128a5',
          opacity: '0.25',
          filter: 'blur(160px)',
          mixBlendMode: 'screen',
          zIndex: '0',
          pointerEvents: 'none',
        },
      })
    },
  ],
}
