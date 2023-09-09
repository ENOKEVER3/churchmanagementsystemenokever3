const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const Modes = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
};

module.exports = () => {
    const isProduction = Modes.PRODUCTION;

    return {
        mode: Modes.PRODUCTION,
        entry: path.join(__dirname, 'src', 'index.tsx'),
        cache: true,
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            alias: {
                assets: path.resolve(__dirname, 'public/assets'),
            },
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
            publicPath: 'auto',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                    sideEffects: true,
                },
                {
                    test: /\.(png|jp(e*)g|gif|webp|avif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/images',
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'index.html'),
                favicon: path.join(__dirname, 'public', 'assets', 'images', 'favicon.ico'),
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'public/assets', to: 'assets' },
                    { from: 'public/_redirects', to: './' },
                ],
            }),
            new CompressionPlugin({
                filename: '[path][base].gz',
                algorithm: 'gzip',
                test: /\.(min\.css|min\.js|js|ts|css|svg|jpe?g|png|html)$/,
                threshold: 10240,
                minRatio: 0.8,
            }),
            new CompressionPlugin({
                filename: '[path][base].br',
                algorithm: 'brotliCompress',
                test: /\.(min\.css|min\.js|ts|js|css|svg|jpe?g|png|html)$/,
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                threshold: 10240,
                minRatio: 0.8,
            }),
            require('postcss-preset-env'),
            require('tailwindcss'),
        ],

        performance: {
            maxEntrypointSize: Infinity,
            maxAssetSize: 1024 ** 4,
        },

        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
        },
    };
};
