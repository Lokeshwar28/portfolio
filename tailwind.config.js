export default {
  darkMode: "class", // ← important
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#020617", // slate-950 - deeper dark for better contrast
        secondary: "#0f172a", // slate-900
        tertiary: "#1e293b", // slate-800
        accent: "#22d3ee", // cyan-400 - modern tech feel
        highlight: "#2dd4bf", // teal-400 - complementary accent
        light: "#f1f5f9", // slate-100
        textPrimary: "#f1f5f9", // slate-100 - high contrast for dark mode
        textSecondary: "#cbd5e1", // slate-300 - secondary text
        textMuted: "#94a3b8", // slate-400 - muted text
      },
      animation: {
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
        "bounce-slow": "bounceSlow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        glass:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-inset": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        neon: "0 0 20px rgba(34, 211, 238, 0.5)",
      },
    },
  },
  plugins: [],
};
