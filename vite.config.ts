import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    // Proxy 설정
    // proxy: {
    //   '/stomp/chat': {
    //     target: 'ws://3.34.183.67:8080',
    //     changeOrigin: true,
    //     ws: true
    //   }
    // }
  },
  build: { chunkSizeWarningLimit: 1600 }
});
