module.exports = {
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
              '@babel/plugin-proposal-numeric-separator',
              '@babel/plugin-proposal-optional-chaining'
            ]
          }
        }
      }
    ]
  }
}