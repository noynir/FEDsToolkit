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
    log('Cleaing Styles');
    var files=(config.cssFiles);
    del(files);

});

gulp.task('styles',['clean-styles'],function(){
    log('Compiling SASS --> CSS'+config.sassSrc);

    return gulp.src(config.sassSrc)
        .pipe($.sass())
        .pipe($.autoprefixer({browsers:['last 3 versions']}))
        .pipe(gulp.dest(config.cssDest));
});

gulp.task('styles-watch',['styles'],function(){
    log('Starting styles Wacther');
    gulp.watch(config.sassSrc,['styles'])

});


gulp.task('inject',['styles'],function(){
    log('injecting js & css '+config.cssFiles);
    return gulp.src(config.htmlFiles)
        .pipe(wiredep(config.wiredepOptions))
        .pipe($.inject(gulp.src(config.jsFiles)))
        .pipe($.inject(gulp.src(config.cssFiles)))
        .pipe(gulp.dest(config.appRoot));

});

gulp.task('bundle',['inject'],function(){
    log('bundling assets'+config.cssFiles);

    var assets=$.useref.assets({searchPath:'./app'});
    return gulp.src(config.htmlFiles)
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.appRoot+"/dist"));
});


function log(msg){
    $.util.log($.util.colors.blue(msg));
}

