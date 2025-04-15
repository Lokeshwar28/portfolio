export default {
  darkMode: 'class', // ← important
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',      // slate-900
        secondary: '#1e293b',    // slate-800
        accent: '#3b82f6',       // blue-500
        highlight: '#0ea5e9',    // sky-500
        light: '#f1f5f9',        // slate-100
      },
      animation: {
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.5' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};