import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: 'dist/server',
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
    ssrEmitAssets: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  ssr: {
    noExternal: ['motion'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.GEMINI_API_KEY': JSON.stringify(''),
  },
});
