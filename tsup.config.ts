import packageJson from "./package.json";
import tsconfig from "./tsconfig.json";
import { defineConfig } from "tsup";

export default defineConfig({
  name: packageJson.name,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  target: tsconfig.compilerOptions.target,
});
