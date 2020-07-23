const Webpack = require('webpack');
const { resolve } = require("path");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: "development",
  devtool: 'eval-source-map',
  entry: {
     app: ['./src/index.js']
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath:'/'
  },
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                include: resolve(__dirname, '../src'),
                use: ['cache-loader', 'babel-loader']
            },
            {
              test: /\.(png|jpg|gif)$/,
              exclude: /node_modules/,
              use: [
                // {
                //   loader: 'file-loader',
                //   options: {
                //     name: '[path][name].[ext]'
                //   }
                // },
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8*1024
                  }
                }
              ]
            },
            {
                test: /\.css$/,
                include: resolve(__dirname, "../src"),
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: isDev,
                        reloadAll: true
                      },
                    },
                    {
                     loader: 'css-loader',
                     options: {
                         modules: true,
                         importLoaders: 1
                     }
                   },
                   { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.css$/,
                include: /[\\/]node_modules[\\/](antd)[\\/]/,
                use: [
                    "style-loader",
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
      new Webpack.DefinePlugin({
         ENV: JSON.stringify(process.env.NODE_ENV)
      }),
      new HtmlWebpackPlugin({
        title: 'Hello World',
        template:'./public/index.html',
        filename: "index.html",
        favicon: "./public/favicon.ico"
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] //不删除dll目录
      }),
      new Webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false
      }),
      new Webpack.DllReferencePlugin({
        manifest:resolve(__dirname, '../build/dll', 'manifest.json')
      }),
      //new BundleAnalyzerPlugin()
    ],
    optimization: {
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
          vendor: {
            //第三方依赖
            priority: 1,
            name: 'vendor',
            test: /node_modules/,
            chunks: 'initial',
            minSize: 100,
            minChunks: 1 //重复引入了几次
          },
          antd: {
            name: "antd", // 单独将antd拆包
            priority: 5, // 权重需大于`vendor`
            test: /[\\/]node_modules[\\/](antd)[\\/]/,
            chunks: 'initial',
            minSize: 100,
            minChunks: 1
          },
          echarts: {
            name: "echarts", //单独将echarts拆包
            priority: 5, // 权重需大于`vendor`
            test: /[\\/]node_modules[\\/](echarts)[\\/]/,
            chunks: 'initial',
            minSize: 100,
            minChunks: 1
          },
          moment: {
            name: "moment", //单独将echarts拆包
            priority: 5, // 权重需大于`vendor`
            test: /[\\/]node_modules[\\/](moment)[\\/]/,
            chunks: 'initial',
            minSize: 100,
            minChunks: 1
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
   devServer: {
      contentBase: resolve(__dirname, "../build"),
      historyApiFallback: true,
      host:"127.0.0.1",
      port: 9000,
      inline: true,
      hot: true,
      // proxy: {
      //    '/api': {
      //      target: 'http://192.168.23.213:8080',
      //      pathRewrite: {'^/api' : ''}
      //    }
      //  }
    }
}
