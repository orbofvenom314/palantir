var webpack = require('webpack');
var react_dir = __dirname + '/node_modules/react/dist/react.min.js';
module.exports = function(options) {
  options = options || {};
  return {
    target: 'web',
    entry: {
      app: ['./app/main.jsx'],
      vendors: ['react']
    },
    resolve: {
      alias: {
        'react': react_dir
      }
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    output: {
      path: './',
      filename: 'bundle.js'
    },
    module: {
      noParse: [new RegExp(react_dir)],
      loaders: [
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.(jsx|es6)$/, loader: 'babel-loader', exclude: new RegExp(react_dir) }
      ]
    }
  };
};