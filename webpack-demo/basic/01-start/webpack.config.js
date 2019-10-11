const path = require('path');

module.exports = {
  entry: {
    user: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist2'),
    filename: '[name].bundle.js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-numeric-separator'
            ]
          }
        }
      }
    ]
  }
}
