import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import { env } from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      extensions: ['tsx'],
      pagesDir: 'src/pages',
    }),
  ], 
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  base: './',
  define: {
    'process.env': env,
  },   
  ssr: {
    noExternal: ['react', 'react-dom'],
  },
  assetsInclude: ['src/assets'],
})
