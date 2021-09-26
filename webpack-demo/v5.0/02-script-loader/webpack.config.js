const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  //   devtool: 'inline-source-map',
  module: {
    rules: [
      //   {
      //     test: require.resolve('zepto'),
      //     use: ['exports-loader?window.Zepto'],
      //     use: 'asset/source'
      //   },
      {
        test: require.resolve('zepto'),
        use: {
          loader: 'imports-loader',
          options: {
            imports: {
              moduleName: 'zepto',
              name: '$',
            },
            additionalCode: 'var myVariable = false;',
            wrapper: 'window',
          },
        },
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
    }),
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
      //   $: 'zepto',
    }),
  ],
};
