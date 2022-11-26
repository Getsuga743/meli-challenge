const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            utils: path.resolve(__dirname, 'src/utils/'),
            services: path.resolve(__dirname, 'src/services/'),
            hooks: path.resolve(__dirname, 'src/hooks/'),
            contexts: path.resolve(__dirname, 'src/contexts/'),
            assets: path.resolve(__dirname, 'src/assets/'),
        },
        extensions: ['.scss', '.js', '.jsx'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].[hash:8].js',
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js',
        publicPath: '/',
        assetModuleFilename: 'assets/img/[hash][ext][query]',
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/images/favicon.svg',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '' },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: 'defaults',
                                    debug: true,
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                },
                            ],
                            ['@babel/preset-react', { runtime: 'automatic' }],
                        ],
                    },
                },
            },
        ],
    },
    devServer: {
        hot: true,
        port: process.env.PORT,
        open: true,
        historyApiFallback: {
            disableDotRule: true,
        },
        proxy: {
            '/api': 'http://localhost:8000',
            changeOrigin: true,
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
