const path = require('path');

module.exports = {
    entry: {
        namor: path.resolve(__dirname, 'lib/src/namor/dist/index.js'),
        jquery: path.resolve(__dirname, 'lib/src/jquery/dist/jquery.js')
    },
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'lib/dist'),
        library: '_[name]',
        libraryTarget: 'umd'
    }
}