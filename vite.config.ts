import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // ← CRITICAL: Tells Vite to use project root
  publicDir: 'public', // ← CRITICAL: Use public/ folder
  server: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist'
  }
})