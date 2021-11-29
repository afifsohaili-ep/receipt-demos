const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'receipt-2': resolve(__dirname, 'receipt-2.html')
      }
    }
  }
})
