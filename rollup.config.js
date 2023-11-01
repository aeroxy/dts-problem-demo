import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import alias from "rollup-plugin-alias";
import { dts } from "rollup-plugin-dts";
import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "src/server.ts",
    output: {
      format: "umd",
      file: "server/index.js",
      name: "server",
      sourcemap: true,
    },
    plugins: [
      alias({
        "@": __dirname + "/src",
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: "ESNext",
          },
        },
      }),
      resolve(),
      commonjs(),
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_debugger: true,
        },
      }),
    ],
  },
  {
    input: "src/server.ts",
    output: [{ file: "server/index.d.ts" }],
    plugins: [dts()],
  },
]);
