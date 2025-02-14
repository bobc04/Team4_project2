import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
 
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5001', // Match your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

