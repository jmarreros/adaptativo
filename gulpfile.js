var gulp 	= require('gulp');
var sass 	= require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('convertCSS', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('scss/css'));
});

gulp.task('concatCSS', ['convertCSS'], function(){
  return gulp.src('scss/css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('watchSCSS',function(){
    gulp.watch(['scss/**/*.scss'],['concatCSS']);
});

gulp.task('default',['watchSCSS']);
