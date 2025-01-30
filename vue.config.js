const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/000-001-ProfilePage/',
  devServer: {
    port: 8000, // port number
  },
})
