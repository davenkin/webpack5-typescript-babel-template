const {merge} = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseWebpackConfig = require('./webpack.base.config.js');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: [["postcss-preset-env"]],
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            additionalData: '@import "./src/styles/_variables.scss";'
                        }
                    }
                ],
            }
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer-report.html'
        })
    ]
});

module.exports = devWebpackConfig;

