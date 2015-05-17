var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')();

gulp.task('default', function(done) {
  webpack(webpackConfig, function(err, stats) {
  	if(err == null) { return done(); }
  });
});