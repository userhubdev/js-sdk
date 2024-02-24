import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";
import { defineConfig } from "tsup";

export default defineConfig({
  name: packageJson.name,
  entry: ["src/mod.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  splitting: true,
  target: tsconfig.compilerOptions.target,
});
