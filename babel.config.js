module.exports = {
  presets:[
    ["@babel/preset-env",{
       targets: {
           esmodules: true
       },
       corejs: {
         version: 3,
         proposals: true
       },
       useBuiltIns:"usage"
    }],
    ["@babel/preset-react",{
         useBuiltIns:true
    }]
  ],
  plugins : [
     ["@babel/plugin-transform-react-jsx", {
       useBuiltIns:true
     }],
     "@babel/plugin-syntax-dynamic-import",
     '@babel/plugin-proposal-class-properties',
     ["import", {
       libraryName: "antd",
       libraryDirectory: "es",
       style: "css"
     }]
  ]
};
