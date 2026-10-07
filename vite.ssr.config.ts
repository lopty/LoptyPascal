import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Builds the server bundle used by prerender.js. It is written outside dist
// so it is never deployed.
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: '.ssr',
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
    ssrEmitAssets: false,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});
