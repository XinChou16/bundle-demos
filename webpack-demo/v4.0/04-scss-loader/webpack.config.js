const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('env', process.env.NODE_ENV)

if (process.env.DEBUG == 1) {
    console.log('=======debug-mode=======')
}

module.exports = {
    // devtool: config.build.productionSourceMap ? '#source-map' : false,
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    // (process.env.NODE_ENV !== 'production') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // 开发，测试环境开启sourcemap文件映射
                            sourceMap: true//process.env.NODE_ENV !== 'production'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            title: '12',
            filename: 'index.html',
            template: 'template.html'
        }),
        new HtmlWebpackPlugin({
            title: '12',
            filename: '12.html',
            template: 'template.html',
            excludeChunks: ['main']
        }),
    ]
};
