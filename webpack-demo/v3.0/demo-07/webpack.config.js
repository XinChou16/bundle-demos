var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    'bundle': './main.js'
  },
  output:{
    filename: '[name].js',
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};