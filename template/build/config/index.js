'use strict';

// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const packageJSON = require('../../package.json');
const path = require('path');

const host = "localhost";
const port = "8080";
const contextPath = "/";

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: '',
        assetsPublicPath: '/',
        resourcesPublicPath: '',
        proxyTable: {
            '/rest/api/' : {
                target: 'http://' + host + ':' + port + contextPath,
                changeOrigin : true
            },
            '/webjars/' : {
                target: 'http://' + host + ':' + port + contextPath,
                changeOrigin : true
            },
            '/ws/' : {
                target: 'ws://' + host + ':' + port + contextPath,
                changeOrigin : false,
                ws: true
            }
        },

        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Paths
    	assetsRoot: path.join(__dirname, '../../target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version),
        assetsSubDirectory: '',
        assetsPublicPath: '/webjars/' + packageJSON.name + '/' + packageJSON.version + '/',
        resourcesPublicPath: 'webjars/' + packageJSON.name + '/' + packageJSON.version,

        /**
         * Source Maps
         */

        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
};
