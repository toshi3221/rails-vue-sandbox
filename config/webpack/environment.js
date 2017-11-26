const { environment } = require('@rails/webpacker')

module.exports = Object.assign({}, environment.toWebpackConfig(), {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
})
