const path    = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './index.jsx'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname),
        publicPath: path.resolve(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: path.resolve(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
                presets: ['@babel/env', '@babel/react']
            }
        }]
    }
};