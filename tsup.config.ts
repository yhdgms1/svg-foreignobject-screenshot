import type { Options } from 'tsup'

export const tsup: Options = {
  sourcemap: false,
  clean: true,
  entryPoints: ['src/index.ts', 'src/lib.ts'],
  target: 'node16',
  format: ['esm', 'cjs'],
  dts: true,
}
