var path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: 'https://growthy-probe.game.linecorp.com',
        publicPath: {
          '^/v1': 'v1'
        }
      }
    }
  },
  chainWebpack: config => {
      config.resolve.alias.set('@mock', path.resolve(__dirname, 'tests/unit/specs/__mockData__'));
  }
}