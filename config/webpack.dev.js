const webpack = require('webpack');
const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'development'


module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: {
     app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle-[hash].js',
    chunkFilename: '[name]-[hash].js',
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

                    "style-loader",

                    MiniCssExtractPlugin.loader,

                   'css-loader',
                   // Compiles Sass to CSS
                   'sass-loader'
                ]
            }
        ]
    },
    plugins: [
          new webpack.DefinePlugin({
             PRODUCTION: JSON.stringify(true),
             VERSION: JSON.stringify('5fa3b9')
          }),
         new HtmlWebpackPlugin({
            title: 'sample',
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./public/favicon.ico"
         }),
         new CleanWebpackPlugin(),
         new webpack.HotModuleReplacementPlugin(),

         new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            //filename: '[name].css',
            chunkFilename: 'index.css',
            filename:"index.css",

            ignoreOrder: false // Enable to remove warnings about conflicting order
          })
     ],
     optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 6,
          maxInitialRequests: 6,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          cacheGroups: {
            vendors: {
              //test: /[\\/]node_modules[\\/]/,
              test: /[\\/]node_modules[\\/](react|react-dom|react-redux|redux|react-router|react-router-dom)[\\/]/,
              priority: -10,
              name:'vendors'
            },
            middles : {
              test: /[\\/]node_modules[\\/](redux-saga|redux-thunk|axios)[\\/]/,
              priority: -15,
              name:'middles'
            },
            commons : {
              test: /[\\/]node_modules[\\/](immutable|moment)[\\/]/,
              priority: -15,
              name:'commons'
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
       }
    },
   stats: { children: false },
   devServer: {
      contentBase: path.resolve(__dirname, "build"),
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
