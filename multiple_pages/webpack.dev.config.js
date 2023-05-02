const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: {
        'base': './src/typescript/pages/base.ts',
        'index': './src/typescript/pages/index.ts',
        'about': './src/typescript/pages/about.ts',
    },
    output: {
        filename: 'src/js/[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto',
        clean: true,
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path]/[name].[ext]',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            url: false
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'src/css/[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['base', 'index'],
            title: 'Home page title',
            description: 'Home page description',
            template: 'src/templates/index.html',
            publicPath: ''
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['base', 'about'],
            title: 'About page title',
            description: 'About page description.',
            template: 'src/templates/about.html',
            publicPath: ''
        }),
        new ESLintPlugin({
            extensions: ['.js', '.ts'],
            exclude: ['node_modules', 'dist'],
            fix: true
        })
    ]
};
