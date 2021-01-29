import webpack from 'webpack';
import express from 'express';
import webpackDevMiddleware  from 'webpack-dev-middleware';
const { join, resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const [, , args] = process.argv;

console.log(resolve(__dirname, '/src/index.js'));
console.log(__dirname + '/src/index.js');

const config = {
    entry: resolve(__dirname, '/src/index.js'),
    mode: "development",
    devtool: "inline-source-map",
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'mwtf.js',
        library: 'mwtf',
        libraryTarget: 'umd',
        publicPath: "/"
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        index: 'index.html',
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            inject: true,
            template: './dist/index.html',
        }),
    ],
}

const compiler = webpack(config);
const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});