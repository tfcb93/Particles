const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    mode: 'production',
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            title: 'Explosions',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
              }
        }),
        new CleanWebpackPlugin()
    ],
    output:{
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}