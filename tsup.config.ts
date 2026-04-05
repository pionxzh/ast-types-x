import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/main.ts'],
  format: ['esm', 'cjs'],
  experimentalDts: true,
  bundle: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'lib',
  target: 'es2020',
  treeshake: true,
  minify: false,
  external: ['tslib'],
})
