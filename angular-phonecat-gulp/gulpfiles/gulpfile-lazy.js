var gulp=require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');

gulp.task('lint',function(){
    log("linting code with ESLint");
    return gulp.src(['app/js/**/*.js'])
        .pipe($.eslint({useEslintrc:true}))
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('clean-styles',function(){
    log('Cleaing Styles');
    var files=('./app/css/**/*.css');
    del(files);

});

gulp.task('styles',['clean-styles'],function(){
    log('Compiling SASS --> CSS');

    return gulp
        .src('app/sass/**/*.scss')
        .pipe($.sass())
        .pipe($.autoprefixer({browsers:['last 3 versions']}))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('styles-watch',['styles'],function(){
    log('Starting styles Wacther');
    gulp.watch('app/sass/**/*.scss',['styles'])

});



function log(msg){
    $.util.log($.util.colors.blue(msg));
}

