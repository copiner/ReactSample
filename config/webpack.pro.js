const Webpack = require('webpack');
const { resolve } = require("path");
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const AddAssetHtmlWebpackkPlugin = require('add-asset-html-webpack-plugin');
//console.log(process.NODE_ENV);

module.exports = {
  mode: "production",
  devtool: 'cheap-module-eval-source-map',
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
                use: {
                    loader: "babel-loader",
                }
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
                    limit: 8*1024
                  }
                }
              ]
            },
            {
                test: /\.css$/,
                include: /src/,
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
            PRODUCTION: JSON.stringify(true),
            ENV: JSON.stringify(process.env.NODE_ENV)
         }),
         new HtmlWebpackPlugin({
            title: 'Hello World',
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon.ico"
         }),
         new AntdDayjsWebpackPlugin(),
         new CleanWebpackPlugin(),
         new MiniCssExtractPlugin({
            filename: 'index[hash].css',
            chunkFilename: 'index[id].css',
            ignoreOrder: false
          }),
          new Webpack.DllReferencePlugin({
            manifest:resolve(__dirname,'../dll/manifest.json')
          }),
          new AddAssetHtmlWebpackkPlugin([
            {filepath:resolve(__dirname,'../dll/vendors.js')},
            {filepath:resolve(__dirname,'../dll/react.js')},
            {filepath:resolve(__dirname,'../dll/antd.js')},
            {filepath:resolve(__dirname,'../dll/echarts.js')}
          ])
     ],
     optimization: {
       splitChunks: {
         chunks: 'async',
         minSize: 30000,
         maxSize: 0,
         minChunks: 1,
         maxAsyncRequests: 5,
         maxInitialRequests: 3,
         automaticNameDelimiter: '~',
         name: true,
         cacheGroups: {
           vendors: {
             //test: /[\\/]node_modules[\\/]/,
             test: /[\\/]node_modules[\\/](react|react-dom|redux)[\\/]/,
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
