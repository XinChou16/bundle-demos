const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'test-plugin',
            base: 'http://example.com/some/page.html',
            templateParameters: {
                foo: 'bar',
                script: '//cdn.com/path',
                obj: {
                    foo: 'foo'
                }
            },
            filename: 'index.html',
            template: 'index.html',
            files: {
                css: ['main.css']
            }
        })
    ]
};
