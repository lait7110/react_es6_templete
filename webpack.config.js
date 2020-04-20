const debug   = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path    = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["@babel/polyfill", "./js/client.js"],
  module: {
    rules: [{
      test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],
            ]
          }
        }]
      }]
    },
    output: {
      path: __dirname + "/src/",
      filename: "client.min.js",
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },  
    plugins: debug ? [] : [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};