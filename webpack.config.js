const path = require('path')
const pkg = require('./package.json');

const resolve = require('./webpack.config.resolve')
const modules = require('./webpack.config.modules')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: pkg.name,
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    resolve,
    module: modules,
    mode: 'development',
};