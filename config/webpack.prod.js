const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
      app: './src/index.js',
      vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-logger',
      'redux-thunk',
      'redux-saga',
      'axios'
      ]
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].bundle.js',
      publicPath:'/'
    },
   mode: 'production',
   devtool: 'source-map',
   optimization: {
     splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
         test: /\.css$/,
         use: [
           {
             loader: MiniCssExtractPlugin.loader,
             options: {
               // you can specify a publicPath here
               // by default it use publicPath in webpackOptions.output
               //publicPath: '../'
             }
           },
           'css-loader'
         ]
       },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/i,//字体与图片
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',//Default
              limit: 8192,
              name:'[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname, '../'),
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css"
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};
