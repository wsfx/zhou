let gulp = require('gulp');
let uglify = require('gulp-uglify');
let mincss = require('gulp-clean-css');
gulp.task('compress',function(){
    gulp.src('js/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
})
gulp.task('css',function(){
    gulp.src('css/index.css').pipe(mincss()).pipe(gulp.dest('dist'));
})
