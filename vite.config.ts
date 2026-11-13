import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For custom domain (ezulabs.com) - use root path
  // For GitHub Pages subpath, change to '/repo-name/'
  base: '/',
})
