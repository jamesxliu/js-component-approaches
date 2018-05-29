const baseConfig = require('../../../webpack-base.config');
const path = require('path');

module.exports = Object.assign(baseConfig, {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'testComponent2.min.js',
        path: path.resolve(__dirname, '../../../lib/server/public/components'),
        library: '_testComponent2',
        libraryTarget: 'umd'
    }
});