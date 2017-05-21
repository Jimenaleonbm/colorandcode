var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var gutil = require('gulp-util');

gulp.task('sass', function() {
  return gulp.src('assets/css/main.scss')
    .pipe($.sass())
    .on('error', $.sass.logError)
    .pipe(gulp.dest('assets/css/build/'));
});

gulp.task('default', ['sass'], function() {
  gutil.log('watching for .scss file changes in /scss.');
  gulp.watch(['assets/css/**/*.scss'], ['sass']);
});
