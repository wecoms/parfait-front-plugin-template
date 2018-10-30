'use strict';

const path = require('path');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageConfig = require('../package.json');
const chalk = require('chalk');
const fs = require("file-system");

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path)
};

exports.resourcesPublicPath = function() {
    return process.env.NODE_ENV === 'production'
        ? config.build.resourcesPublicPath
        : config.dev.resourcesPublicPath;
};

exports.cssLoaders = function (options) {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap,
            extract: false
        }
    };

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = [cssLoader];

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap,
                    extract: false
                })
            })
        }

        return ['vue-style-loader'].concat(loaders)
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    const output = [];
    const loaders = exports.cssLoaders(options);

    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }

    return output
};

exports.createComponents = function(componentsPath) {
    let content = '// This file is created automatically by system.\n\n';

    let names = [];
    fs.recurseSync(resolve('src/front/' + componentsPath), ['**/*.vue'], function(filepath, relative, filename) {
        console.log('  > extract vue component : ' + filename);
        const name = filename.replace('.vue', '');
        const relativePath = './' + componentsPath + '/' + relative;
        content += 'import ' + name + ' from "' + relativePath.replace(/\\/g, '/') + '"\n';
        names.push(name);
    });
    content += '\n';

    content += 'export default {\n';
    content += '    get: function() {\n';
    content += '        const map = new Map();\n';
    names.forEach(function(name) {
        content += '        map.set(' + name + '.name, ' + name + ');\n';
    });
    content += '        \n';
    content += '        return map;\n';
    content += '    }\n';
    content += '}\n';

    fs.writeFileSync(resolve('src/front/plugin-components.js'), content);
};

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier');

    return (severity, errors) => {
        if (severity !== 'error') return;

        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
};
