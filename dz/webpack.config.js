const path                   = require('path');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
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
    },
    plugins: [
        //new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        /*new HtmlWebpackPlugin({
          template: '../index.html'
        }),*/
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};