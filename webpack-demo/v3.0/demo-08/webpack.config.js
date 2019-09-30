var HtmlwebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: {
    'bundle': './main.js'
  },
  output:{
    filename: '[name].js',
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'webpack-demo',
      filename: 'index.html' 
    }),
    new OpenBrowserPlugin({
      url: 'http:localhost:8080'
    })
  ]
};