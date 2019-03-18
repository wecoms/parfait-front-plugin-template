'use strict';

const path = require('path');
const chalk = require('chalk');
const utils = require('./utils');
const config = require('./config');
const vueLoaderConfig = require('./vue-loader.conf');
const WebpackBeforeBuildPlugin = require('before-build-webpack');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client'),
                    resolve('node_modules/parfait-kernel')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: utils.assetsPath('images/[name].[ext]'),
                    publicPath: utils.resourcesPublicPath()
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: utils.assetsPath('media/[name].[ext]'),
                    publicPath: utils.resourcesPublicPath()
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: utils.assetsPath('fonts/[name].[ext]'),
                    publicPath: utils.resourcesPublicPath()
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new WebpackBeforeBuildPlugin(function(compiler, callback) {
            console.log();
            console.log(" " + chalk.blue('extract components before build...'));

            utils.createComponents('components');

            console.log(" " + chalk.blue('complete to extract components'));
            console.log();
            callback();
        })
    ]
};
