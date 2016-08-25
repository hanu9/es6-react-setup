var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
module.exports = {
  entry:"./client/main.js",
  output:{
    path:__dirname + "/public",
    filename:"[name].[hash].js"
  },
  module:{
    loaders:[
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', '!css-loader!sass-loader') },
      { test: /\.js$/, exclude: "node_modules", loader: "babel", query:{presets:["es2015","react"], cacheDirectory: true}}
    ]
  },
  plugins:[
    new ExtractTextPlugin('[name].[hash].css'),
    new AssetsPlugin({
      path: __dirname + "/config",
      filename: 'static-assets.json',
      prettyPrint: true
    })
  ]
};
