const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // need corejs 3 version
              // npm install core-js@3 --save
              // `import 'core-js'`
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]
            ]
          }
        }
      }
    ]
  }
};
