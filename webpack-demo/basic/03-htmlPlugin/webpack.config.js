const HmtlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HmtlWebpackPlugin({
      title: 'demo',
      filename: 'index.html',
      template: 'template.html',
      minify: true
    })
  ]
}