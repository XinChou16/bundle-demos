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
            filename: 'index.html',
            template: 'template.html',
            // base: 'http://example.com/some/page.html',
            templateParameters: {
                foo: 'bar',
                script: '//cdn.com/path',
                obj: {
                    foo: 'foo'
                }
            },
            // files: {
            //     css: ['main.css']
            // }
        })
    ]
};
