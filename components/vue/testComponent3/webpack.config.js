const baseConfig = require('../../../webpack-base.config');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = Object.assign(baseConfig, {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'testComponent3.min.js',
        path: path.resolve(__dirname, '../../../lib/server/public/components'),
        library: '_testComponent3',
        libraryTarget: 'umd'
    },
    plugins: [new VueLoaderPlugin()],
});