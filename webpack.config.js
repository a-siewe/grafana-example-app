const path = require('path');
const webpack = require('webpack');
const context = path.join(__dirname, 'src');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'node',
    context: context,
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './module.ts',
    output: {
        filename: 'module.js',
        path: path.join(__dirname, 'data/plugins/example-app'),
        libraryTarget: 'amd'
    },
    externals: [
        // remove the line below if you don't want to use buildin versions
        'jquery', 'lodash', 'moment', 'angular', 'react', 'react-dom', '@grafana/ui',
        function (context, request, callback) {
            var prefix = 'grafana/';
            if (request.indexOf(prefix) === 0) {
                return callback(null, request.substr(prefix.length))
            }
            callback()
        }
    ],
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CopyWebpackPlugin([
            {
                from: './css/*'
            }
        ])
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        alias: {
            'src': context
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['@babel/preset-env'] },
                    },
                    'ts-loader',
                ],
                exclude: /(node_modules)/,
            },
            {
                test: /\.js$/,
                exclude:  /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    }
};


