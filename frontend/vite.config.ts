import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  build: {
        outDir: "../static",
        emptyOutDir: true
    },
    plugins: [
        react(),
    ],
    server: {
        host: '0.0.0.0',
        strictPort: true,
        watch: {
            usePolling: true,
        },
        proxy: {
            '/api': {
                target: 'http://localhost:80/api',
                changeOrigin: true, 
                secure: false, 
            }
        },
    },

})
