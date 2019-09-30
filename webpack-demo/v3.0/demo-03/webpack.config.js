module.exports = {
  entry: {
    'bundle': './main.jsx'
  },
  output:{
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      }
    ]
  }
};