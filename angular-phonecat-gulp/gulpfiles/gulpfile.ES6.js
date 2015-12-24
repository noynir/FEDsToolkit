var gulp = require('gulp');
var config = require('./gulpconfig')();
var $ = require('gulp-load-plugins')({lazy: true});
var del = require('del');
var wiredep=require('wiredep').stream;

gulp.task('lint',function(){
    log("linting code with ESLint");
    return gulp.src(config.jsFiles)
        .pipe($.eslint({useEslintrc:true}))
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError());
});

gulp.task('clean-styles',function(){
    log('Cleaning Styles');
    return clean(config.cssFiles);
});

gulp.task('styles',['clean-styles'],function(){
    log('Compiling SASS --> CSS'+config.sassSrc);

    return gulp.src(config.sassSrc)
        .pipe($.sass())
        .pipe($.autoprefixer({browsers:['last 3 versions']}))
        .pipe(gulp.dest(config.cssDest));
});

gulp.task('styles-watch',['styles'],function(){
    log('Starting styles Watcher');
    gulp.watch(config.sassSrc,['styles'])

});

gulp.task('es6',function(){
    log('Transpiling ES6 to ES5')
    return gulp.src(config.jsFiles)
        .pipe($.babel())
        .pipe(gulp.dest(config.jsRoot));
});


function log(msg){
    $.util.log($.util.colors.blue(msg));
}

function clean(path){
    return del(path);
}
