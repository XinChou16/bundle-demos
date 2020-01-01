const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'//'[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Site',
            filename: 'index.html',
            template: 'template.ejs',
            inject: false,
            // favicon: '/favicon.ico',
            hash: true,

            // custom data
            foo: 'foo1',
            fooObj: {
                foo: 'foo2'
            },
            flag: true,
            headHtmlSnippet: '<style>body {background: #69f}</style>',
            scripts: [
                '//cdn.abc.com/app.js',
                '//cdn.abc.com/vendor.js',
            ],
            // templateParameters: {
            //     foo: 'templateParameters-foo'
            // }
        })
    ]
};
