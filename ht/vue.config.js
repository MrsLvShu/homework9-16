const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/lejuAdmin': {
        target: 'http://leju.bufan.cloud',
        changeOrigin: true,
      },
      '/admin': {
        target: 'http://leju.bufan.cloud',
        changeOrigin: true,
      },
    }
  }
})
