const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
// console.log(process.NODE_ENV);

module.exports = {
  mode: "production",
  entry: {
     app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath:'/'
  },
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }
                },
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
              ]
            },
            {
                test: /\.css$/,
                include: /src/,
                use: [

                  'style-loader',

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
                include: /[\\/]node_modules[\\/](antd)[\\/]/,
                use: [
                    "style-loader",
                    'css-loader'
                ]
            }
        ]
    },
    stats: { children: false },
    plugins: [
         new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            ENV: JSON.stringify(process.env.NODE_ENV)
         }),
         new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'Hello World',
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon.ico"
         }),
         new AntdDayjsWebpackPlugin(),
         new CleanWebpackPlugin(),
         new CompressionPlugin(),
         new MiniCssExtractPlugin({
            filename: 'index[hash].css',
            chunkFilename: 'index[id].css',
            ignoreOrder: false
          })
     ],
     //SplitChunksPlugin
     optimization: {
       splitChunks: {
         chunks: 'async',
         minSize: 30000,
         maxSize: 0,
         minChunks: 1,
         maxAsyncRequests: 6,
         maxInitialRequests: 4,
         automaticNameDelimiter: '~',
         automaticNameMaxLength: 30,
         cacheGroups: {
           defaultVendors: {
             test: /[\\/]node_modules[\\/]/,
             priority: -10
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
