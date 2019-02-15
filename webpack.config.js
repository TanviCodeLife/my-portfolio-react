const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        // eslint-disable-next-line no-undef
        resolve(__dirname, 'src', 'index.jsx')
    ],

    output: {
        filename: 'app.bundle.js',
        // eslint-disable-next-line no-undef
        path: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: '#source-map',

    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFile: './.eslintrc.json'
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: [
                        'react-hot-loader/babel'
                    ]
                }
            },
            {
                test: /\.(png|gif|jp(e*)g|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }
            }
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template:'template.ejs',
            appMountId: 'react-app-root',
            title: 'Portfolio',
            filename: resolve(__dirname, 'build', 'index.html'),
        }),
    ]
};
