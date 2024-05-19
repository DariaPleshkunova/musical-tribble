import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // Обеспечивает относительные пути
  build: {
    outDir: 'dist',  // Указывает выходную папку
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
});
