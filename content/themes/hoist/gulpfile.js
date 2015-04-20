var gulp = require('gulp');
var gutil = require('gulp-util');

// require sass
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
  gulp.src('./assets/Sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/styles'));
});

 gulp.task('watch', function() {
  // watch scss files
  gulp.watch('./assets/Sass/*.scss', function() {
    gulp.run('sass');
  });
});

gulp.task('default', ['sass', 'watch']);