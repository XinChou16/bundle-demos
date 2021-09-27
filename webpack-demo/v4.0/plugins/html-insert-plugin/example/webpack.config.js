const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InjectPlugin = require('../src/plugin');

module.exports = {
  entry: './index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    // new InjectPlugin({
    //     content: '<script>var foo=1;</script>\n',
    //     position: 'head',
    //     type: 'append'
    // }),
    new InjectPlugin([
      {
        content: '\n<script>var bar=111;</script>\n',
        position: 'body',
        type: 'append',
      },
      {
        content: '<script>var bar=222;</script>\n',
        position: 'body',
        type: 'append',
      },
      {
        content: '\n<script>var bar=333;</script>\n',
        position: 'head',
        type: 'prepend',
      },
    ]),
  ],
};
