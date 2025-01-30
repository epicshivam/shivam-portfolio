import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shivam-portfolio",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
