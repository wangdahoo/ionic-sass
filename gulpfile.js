var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('clean:all', function (cb) {
  return gulp.src('dist/', {read: false})
    .pipe(clean());
});

gulp.task('fonts', ['clean:all'], function () {
  return gulp.src('./styles/fonts/*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('default', function () {
  return gulp.src('./styles/scss/ionic.scss')
    // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./styles/**/*.scss', ['default']);
});

gulp.task('build', ['fonts'], function () {
  return gulp.src('./styles/scss/ionic.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'));
});
