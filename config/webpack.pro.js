const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                test: /\.(sa|sc|c)ss$/,
                use: [

                  // Creates `style` nodes from JS strings
                  'style-loader',

                  MiniCssExtractPlugin.loader,

                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
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
         new CleanWebpackPlugin(),
         new CompressionPlugin(),
         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: 'index[hash].css',
            chunkFilename: 'index[id].css',

            ignoreOrder: false, // Enable to remove warnings about conflicting order
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
