
const { merge } = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const commonConfig = require('./webpack.common');
const path = require('path');
const devConfig = {
    mode: "development",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: '**/*.css',
                    to: '[path][name][ext]',
                    context: 'src'
                },
                {
                    from: '**/*.ts',
                    to: '[path][name].js',
                    context: 'src'
                },
                {
                    from: '**/*.tsx',
                    to: '[path][name].jsx',
                    context: 'src'
                }
            ]
        }),
        new ReactRefreshPlugin()
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 8080,
        open: true
    }
};

module.exports = merge(commonConfig, devConfig);