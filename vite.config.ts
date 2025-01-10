import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'), // Alias for easier imports
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/utils/variables' as *;`, // Import global variables
      },
    },
    postcss: {
      plugins: [
        autoprefixer(), // Correctly pass autoprefixer as a plugin
      ],
    },
  },
});