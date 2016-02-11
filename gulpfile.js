'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver'),
    exec = require('child_process').exec;

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('sass:watch', ['sass'], function () {
  gulp.watch(['./src/styles/**/*.scss'], ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./app')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8000,
    }));
});

gulp.task('serve', ['sass', 'webserver', 'sass:watch']);
