import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // ADD THESE TWO LINES:
  publicDir: 'public',
  build: {
    assetsInclude: ['**/*.mp4', '**/*.jpg', '**/*.png'],
  },
});