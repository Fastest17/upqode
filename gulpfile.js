var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});


gulp.task('watch', function () {
    return gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
});
