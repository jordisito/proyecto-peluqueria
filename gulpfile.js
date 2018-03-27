const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    gulp
      .src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('default', () => {

    browserSync.init({ server: './' });
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./scss/**/*.scss', ['sass']);
});