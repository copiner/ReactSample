/*
dll 单独打包
webpack.DllPlugin
webpack.DllReferencePlugin
add-asset-html-webpack-plugin
*/
const { resolve } = require('path');
const Webpack = require('webpack');

module.exports = {
    entry: {
      vendors:['lodash','axios'],
      react:['react','react-dom'],
      antd:['antd'],
      echarts:['echarts']
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'../dll'),
        library:'[name][hash]'
    },
    //plugins
    plugins:[
        new Webpack.DllPlugin({
            name:'[name][hash]',
            path:resolve(__dirname,'../dll/manifest.json'),
        })
    ],

    //mode
     mode:'production'
}
