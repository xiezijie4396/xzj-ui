import { defineConfig } from "vite";
import { resolve } from "path";

export const config = {
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@xiezijie/shared",
      formats: ["es"],
    },
    outDir: "./dist",
  },
  output: {
    extend: true
  }
};

export default defineConfig(config);
