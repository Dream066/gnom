'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var sassTask = function () {
    return gulp.src('./sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

gulp.task('sass', sassTask);

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', sassTask);
});