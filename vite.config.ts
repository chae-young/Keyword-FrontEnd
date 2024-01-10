import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    // Proxy 설정
    proxy: {
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true
      }
    }
  }
});
