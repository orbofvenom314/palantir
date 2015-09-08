var webpack = require('webpack');
var _ = require('lodash');
var react_dir = __dirname + '/node_modules/react';
var reactRouter_dir = __dirname + '/node_modules/react-router';

const defaultOptions = {
  NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
};

module.exports = function(options) {
  options = _.assign(_.clone(defaultOptions), options || {});
  var plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ];
  if(options.NODE_ENV === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    target: 'web',
    entry: {
      app: ['./app/main.jsx', 'webpack/hot/only-dev-server'],
      vendors: ['react', 'react-router']
    },
    resolve: {
      alias: {
        'react': react_dir,
        'react-router': reactRouter_dir
      }
    },
    plugins: plugins,
    output: {
      path: __dirname + '/build/',
      filename: 'bundle.js'
    },
    module: {
      //noParse: [new RegExp(react_dir)],
      loaders: [
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.(js|jsx|es6)$/, loader: options.NODE_ENV === 'development' ? 'react-hot-loader!babel-loader?stage=0' : 'babel-loader?stage=0', exclude: new RegExp('/node_modules/') }
      ]
    }
  };
};