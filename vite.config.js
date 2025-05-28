// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        // esbuild + Terser target; must support TLA
        target: 'esnext',
        // (Optionally) instruct Rollup to emit native ESM
        rollupOptions: {
            output: {
                format: 'es'
            }
        }
    },
    esbuild: {
        // make sure esbuild itself lets TLA through
        target: 'esnext'
    }
});