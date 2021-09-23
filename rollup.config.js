import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

import pkg from './package.json'

// 剔除所有开发和生产依赖
const deps = [
  Object.keys(pkg.dependencies || {}),
  Object.keys(pkg.devDependencies || {}),
]

export default defineConfig({
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  external: Array.from(new Set(deps.flat())),
  plugins: [nodeResolve(), commonjs()],
})
