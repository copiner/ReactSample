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
     ["@babel/plugin-transform-runtime",{
        corejs:3
      }],
     '@babel/plugin-proposal-class-properties',
     "@babel/plugin-syntax-dynamic-import",
     ["import", {
       libraryName: "antd",
       libraryDirectory: "es",
       style: "css"
     }]
  ]
};
