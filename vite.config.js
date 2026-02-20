import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable source maps for production debugging (optional, remove if not needed)
    sourcemap: false,

    // Optimize chunk size
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // React core libraries
          "react-vendor": ["react", "react-dom"],

          // Animation library
          "framer-motion": ["framer-motion"],

          // Icon libraries
          icons: ["react-icons", "lucide-react"],

          // Form handling
          forms: ["react-hook-form", "@emailjs/browser"],

          // Utilities
          utils: ["react-intersection-observer", "react-simple-typewriter"],
        },

        // Naming pattern for chunks
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },

    // Minification settings - using esbuild (faster than terser and included by default)
    minify: "esbuild",
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
