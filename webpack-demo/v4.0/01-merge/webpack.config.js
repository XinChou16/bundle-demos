const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
  entry: {
    // main: ['./index.js','./src/01.js', './src/02.js']
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    pathinfo: true
  },
  module: {
      rules: [
        {
            test: require.resolve('zepto'),
            use: ['exports-loader?window.Zepto','script-loader']
        }
      ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '12',
      filename: 'index.html',
      template: 'template.html'
    }),
    // new MergeIntoSingleFilePlugin({
    //     files: {
    //         'main.js': [
    //             './index.js',
    //             './src/01.js'
    //         ]
    //     },
    //     hash: true
    // }),
  ]
}
