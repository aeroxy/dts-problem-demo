My goal is to output a lib folder with CommonJS (CJS) modules using TypeScript (tsc) and a special server folder where the `index.js` is bundled by Rollup (UMD) from `/src/server.ts`.

The problem arises when I try to generate TypeScript declaration files (*.d.ts) for my `/src/server.ts` file. By default, TypeScript produces a `server.d.ts` declaration file, but I want it to match the name of the output file, which is `index.js`. To address this, I've employed the `rollup-plugin-dts` to bundle the `index.d.ts` from `/src/server.ts`.

However, I've encountered an issue. When I write my source code as follows:

```ts
export { Demo };
export type { IFoo };
```

The plugin `rollup-plugin-dts` compiles it to:

```ts
export { type IFoo, ServerDemo };
```

This is undesirable because export `{ type IFoo, ServerDemo }` is not supported in some older versions of TypeScript projects. How can I turn off this automatic combination and make it compile to the expected:

```ts
export { Demo };
export type { IFoo };
```

Please note that in `lib/server.d.ts`, where TypeScript compiles based on my tsconfig, it doesn't exhibit the unexpected merging of exports.
