const path = require("path");
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
    'redux-saga',
    'redux-thunk',
    'axios'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath:'/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
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
           'style-loader',
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
    new webpack.DefinePlugin({
      ENV: JSON.stringify("dev")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // inline: false,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    //publicPath: '/assets/',
    proxy: {
       '/api': {
         target: 'http://192.168.23.213:8080',
         pathRewrite: {'^/api' : ''}
       }
     }
  }
};
