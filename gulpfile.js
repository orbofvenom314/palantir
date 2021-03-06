var _ = require('lodash');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var preprocess = require('gulp-preprocess');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')();
var webpackDevServer = require('webpack-dev-server');

gulp.task('default', ['build', 'start-server']);

gulp.task('build', ['html', 'webpack']);

gulp.task('webpack', function(done) {
  webpack(webpackConfig, function(err, stats) {
  	if(err == null) { return done(); }
  });
});

gulp.task('html', function(done) {
	gulp.src('./app/index.html')
		.pipe(preprocess({ NODE_ENV: process.env || 'development', debug: true }))
		.pipe(gulp.dest('./'));
});

gulp.task('start-server', function(done) {
	var compiler = webpack(webpackConfig);

	new webpackDevServer(compiler, {
    hot: true,
    inline: true,
    noInfo: true,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function(err) {

	});
});