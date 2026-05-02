import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Target modern browsers for smaller output
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — always needed first
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom") || id.includes("node_modules/react-router-dom") || id.includes("node_modules/scheduler")) {
            return "vendor";
          }
          // Animation libraries — large, but loaded after paint
          if (id.includes("node_modules/framer-motion")) {
            return "motion";
          }
          if (id.includes("node_modules/gsap")) {
            return "gsap";
          }
          // Radix UI — only used for dropdowns + toasts; isolate from critical path
          if (id.includes("node_modules/@radix-ui")) {
            return "radix";
          }
          // Icons — tree-shaken but still isolated for better caching
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
          // Data-fetching stack
          if (id.includes("node_modules/@tanstack") || id.includes("node_modules/react-query")) {
            return "query";
          }
          // Supabase — only needed for auth flows
          if (id.includes("node_modules/@supabase")) {
            return "supabase";
          }
          // HLS streaming — only loaded by ProcessSection
          if (id.includes("node_modules/hls.js")) {
            return "hls";
          }
        },
      },
    },
  },
}));
