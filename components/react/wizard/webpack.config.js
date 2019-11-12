const baseConfig = require('../../../webpack-base.config');
const path = require('path');

module.exports = Object.assign(baseConfig, {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'wizard.min.js',
        path: path.resolve(__dirname, '../../../lib/server/public/components'),
        library: '_wizard',
        libraryTarget: 'umd'
    },
    module: {
        rules: baseConfig.module.rules.filter((rule) => (
            !rule.test.test(".scss")
        )).concat({
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: false,
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        })
    }
});