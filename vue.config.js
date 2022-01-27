const path = require('path')

module.exports = {
  /* configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  } */
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  }
}
