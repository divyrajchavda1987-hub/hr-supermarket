import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, "index.html"),
        admin: resolve(rootDir, "partner-admin", "index.html"),
        divyraj: resolve(rootDir, "divyraj", "index.html"),
      },
    },
  },
});
