import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      rollupTypes: false,
      entryRoot: "src",
      outDir: "dist",
      include: ["src/index.ts", "src/**/*.ts", "src/**/*.vue"],
    }),
  ],
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: resolve(root, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: (id) => id === "vue" || id.startsWith("@nodish/core"),
      output: {
        assetFileNames: (asset) =>
          asset.names?.some((name) => name.endsWith(".css"))
            ? "index.css"
            : "[name][extname]",
      },
    },
  },
});
