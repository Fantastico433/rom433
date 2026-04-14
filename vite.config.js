import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import { readFileSync, cpSync } from 'fs'

function imagesPlugin() {
  return {
    name: 'serve-project-images',
    configureServer(server) {
      server.middlewares.use('/images', (req, res, next) => {
        const url = decodeURIComponent(req.url.split('?')[0].replace(/^\//, ''))
        if (!url) return next()
        const filePath = join(process.cwd(), 'images', url)
        try {
          const data = readFileSync(filePath)
          const ext = filePath.split('.').pop().toLowerCase()
          const mimes = {
            jpg: 'image/jpeg', jpeg: 'image/jpeg',
            png: 'image/png', pdf: 'application/pdf',
            gif: 'image/gif', webp: 'image/webp',
            svg: 'image/svg+xml',
          }
          res.setHeader('Content-Type', mimes[ext] || 'application/octet-stream')
          res.setHeader('Cache-Control', 'public, max-age=3600')
          res.end(data)
        } catch {
          next()
        }
      })
    },
    closeBundle() {
      try {
        cpSync(join(process.cwd(), 'images'), join(process.cwd(), 'dist', 'images'), { recursive: true })
        console.log('✓ Images copied to dist/images')
      } catch (e) {
        console.warn('⚠ Images copy skipped:', e.message)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), imagesPlugin()],
})
