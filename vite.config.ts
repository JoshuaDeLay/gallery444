import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // This allows IPv6 connections; consider using "0.0.0.0" for IPv4
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Only include componentTagger in development mode
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for src directory
    },
  },
}));
