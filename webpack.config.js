var webpack = require('webpack');
var _ = require('lodash');
var path = require('path');

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
      vendors: ['react', 'react-router', 'lodash'],
    },
    // resolve: {
    //   alias: {
    //     'react/lib': path.resolve(__dirname + '/node_modules/react/lib')
    //   }
    // },
    plugins: plugins,
    output: {
      path: __dirname + '/build/',
      filename: 'bundle.js'
    },
    module: {
      // noParse: [
      //   new RegExp(__dirname + '/node_modules/react'),
      //   new RegExp(__dirname + '/node_modules/react-router'),
      //   new RegExp(__dirname + '/node_modules/lodash'),
      // ],
      loaders: [
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.(js|jsx|es6)$/, loader: options.NODE_ENV === 'development' ? 'react-hot-loader!babel-loader?stage=0' : 'babel-loader?stage=0', exclude: /node_modules/ }
      ]
    }
  };
};