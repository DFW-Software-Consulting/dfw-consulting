const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/images/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

module.exports = config;