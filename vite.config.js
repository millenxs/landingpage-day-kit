import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // separa o MUI do código da página para o navegador fazer cache
        manualChunks: { mui: ['@mui/material', '@emotion/react', '@emotion/styled'] },
      },
    },
  },
})
