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
    externals: {      
        // Don't bundle react or react-dom      
        "react": {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    },
    mode: 'development',
};