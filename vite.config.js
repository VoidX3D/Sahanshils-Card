import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'bundle-stats.html', // Explicit filename
      open: true,
      gzipSize: true,
      brotliSize: true,
      emitFile: true, // Ensure the file is emitted
    })
  ]
})