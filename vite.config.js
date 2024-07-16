// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-solid-svg-icons'
      ]
    }
  }
});
