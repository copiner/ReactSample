const Webpack = require('webpack');
const { resolve } = require("path");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: "production",
  devtool: 'cheap-module-eval-source-map',
  entry: {
     app: ['./src/index.js']
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath:'/'
  },
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                include: resolve(__dirname, '../src'),
                use: {
                    loader: "babel-loader",
                }
            },
            {
              test: /\.(png|jpg|gif)$/,
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
                include: resolve(__dirname, '../src'),
                use: [
                  MiniCssExtractPlugin.loader,

                  {
                   loader: 'css-loader',
                   options: {
                     modules: true,
                     importLoaders: 1
                   }
                 },
                 {
                   loader: 'postcss-loader'
                 }
                ]
            },
            {
                test: /\.css$/,
                include: /[\\/]node_modules[\\/](antd|cropperjs)[\\/]/,
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
         new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
            chunkFilename: '[id]-[hash].css',
            ignoreOrder: false
          }),
          new Webpack.DllReferencePlugin({
            manifest:resolve(__dirname, '../build/dll', 'manifest.json')
          }),
          new BundleAnalyzerPlugin()//打包调整更新优化
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
             // chunks: 'initial',
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
     }
}
