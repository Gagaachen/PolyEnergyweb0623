// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    open: true, // Automatically open the app in the browser on server start
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        'product-showcase': resolve(__dirname, 'product-showcase.html'),
        'news-detail': resolve(__dirname, 'news-detail.html'),
        contact: resolve(__dirname, 'contact.html'),
        news: resolve(__dirname, 'news.html'),
      },
    },
  },
  // If your main HTML file is not index.html at the root, or you have multiple HTML entry points,
  // you might need to configure build.rollupOptions.input here.
  // For a single index.html at the root, this is usually not needed.
}); 