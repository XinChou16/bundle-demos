const path = require('path');

module.exports = {
  entry: {
    user: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: '[name].[hash:3].bundle.js',
    pathinfo: true
  },
}
