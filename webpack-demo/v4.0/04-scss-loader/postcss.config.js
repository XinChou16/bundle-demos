// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        // to edit target browsers: use "browserslist" field in package.json
        autoprefixer: {
            overrideBrowserslist: ['last 2 versions', 'iOS >= 8', 'Android > 4']
        },
        // npm i -D postcss-pxtorem
        // 'postcss-pxtorem': {
        //     rootValue: 37.5,
        //     unitPrecision: 6,
        //     propWhiteList: [],
        //     selectorBlackList: [],
        //     replace: true,
        //     mediaQuery: false,
        //     minPixelValue: 1
        // }
    }
};
