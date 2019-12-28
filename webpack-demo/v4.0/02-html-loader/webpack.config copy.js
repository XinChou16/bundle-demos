const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        pathinfo: true,
        // libraryTarget: 'amd'
    },
    module: {
        rules: [
            {
                test: /\.html/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'test-plugin',
            templateParameters: {
                foo: 'bar'
            },
            filename: 'index.html',
            template: 'template.html'
        })
    ]
};
