var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
    LoaderOptionsPlugin
} = require('webpack');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-demo-1',
            template: './src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/i,

            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',

                    }
                },
                'css-loader'
            ]
        }]
    }
};