import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // Minificación y optimización
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    
    // Chunking
    rollupOptions: {
      output: {
        manualChunks: {
          'telegram': ['telegram-web-app']
        }
      }
    },
    
    // Configuración build
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false, // Desactivar en producción
    reportCompressedSize: true
  },
  
  // Configuración servidor
  server: {
    port: 5173,
    strictPort: false,
    host: '0.0.0.0'
  },
  
  // Variables globales
  define: {
    '__APP_VERSION__': JSON.stringify('1.0.0'),
    '__BUILD_TIME__': JSON.stringify(new Date().toISOString())
  }
})