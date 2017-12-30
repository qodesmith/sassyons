'use strict';

const gulp = require('gulp');
const scss = require('gulp-sass');
const minifyCss = require('gulp-csso');
const combineMQ = require('gulp-combine-mq');
const rename = require('gulp-rename');

gulp.task('scss', () => {
  return gulp.src('./scss/sassyons.scss')
    .pipe(scss())
    .on('error', onError)
    .pipe(combineMQ({ beautify: true }))
    .on('error', onError)
    .pipe(minifyCss())
    .on('error', onError)
    .pipe(rename('sassyons.min.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('scss:full', () => {
  return gulp.src('./scss/sassyons.scss')
    .pipe(scss())
    .on('error', onError)
    .pipe(combineMQ({ beautify: true }))
    .on('error', onError)
    .pipe(rename('sassyons.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['scss', 'scss:full'], () => {
  gulp.watch('./scss/**/*.scss', ['scss', 'scss:full']);
});

// http://goo.gl/SboRZI
// Prevents gulp from crashing on errors.
function onError(err) {
  console.log(err);
  this.emit('end');
}
