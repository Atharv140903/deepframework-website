import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["tests/setup.ts"],
    // Process CSS modules and keep class names unscoped so tests can assert on them.
    css: { include: /.+/, modules: { classNameStrategy: "non-scoped" } },
  },
});
