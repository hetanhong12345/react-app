const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = (env = 'dev') => {
    console.log('------->', env)
    const config = {
        mode: 'development',
        entry: {
            main: './src/index',
            ventor: ['react', 'react-dom', 'axios',
                'redux', 'react-redux', 'redux-thunk',
                'react-router', 'react-router-dom', 'react-router-config']
        },
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js',
            chunkFilename: '[id].chunk.js',
            publicPath: '/dist/'
        },
        resolve: {
            extensions: ['.js', '.json','.jsx']

        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    enforce: 'pre',
                    exclude: [/node_modules/],
                    use: {
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')
                        }
                    },

                },
                {
                    test: /\.(js|jsx)$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[hash:8].[ext]'
                        }
                    }

                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[hash:8].[ext]'

                        }
                    }
                },
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                modules: false
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                modules: false
                            }
                        }
                    ]


                }
            ]
        },
        optimization: {
            splitChunks: {
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    ventor: {
                        test: 'ventor',
                        name: "ventor",
                        chunks: 'initial'
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(['./dist', './html']),
            new HtmlWebpackPlugin({
                title: 'react',
                env,
                favicon: './public/favicon.ico',
                chunks: ['ventor', 'main'],
                inject: 'body',
                filename: path.resolve(__dirname, 'html/index.html'),
                template: './index.ejs',
                minify: {//压缩HTML文件
                    removeComments: true,    //移除HTML中的注释
                    collapseWhitespace: true    //删除空白符与换行符
                }
            }),

        ],
        devtool: '#eval-source-map'
    }
    if (env != 'dev') {

        config.devtool = '';
        config.mode = 'production';
        config.output.filename = `[name].[chunkhash:8].js`;
        config.output.chunkFilename = `[name].[chunkhash:8].chunk.js`;
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    'kingold': JSON.stringify(env)
                }
            }),

            new webpack.HashedModuleIdsPlugin({
                hashFunction: 'sha256',
                hashDigest: 'hex',
                hashDigestLength: 20
            })

        ]);
    }
    return config
};
