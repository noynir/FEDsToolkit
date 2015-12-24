var gulp = require('gulp');
var config = require('./gulpconfig')();
var $ = require('gulp-load-plugins')({lazy: true});

var browserSync = require('browser-sync').create();
gulp.task('serve',['inject'],function() {
    browserSync.init({
        server: config.appRoot,
        port:8080
    });

    gulp.watch(config.sassSrc,['styles']); 
    gulp.watch([config.jsFiles,'!./app/js/dist/**'],['js-watch']);
    gulp.watch(config.htmlFiles,function(){
        browserSync.reload()
    });
});

gulp.task('styles',['clean-styles'],function(){
    return gulp.src(config.sassSrc)
        .pipe($.sass())
        .pipe(gulp.dest(config.cssDest))
        .pipe(browserSync.stream());
});

gulp.task('clean-styles',function(){
    return clean(config.cssFiles);
});

gulp.task('clean-js', function () {
    return clean(config.jsDistFiles);
});

gulp.task('es6',['clean-js'],function(){
    return gulp.src(config.jsFiles)
        .pipe($.babel())
        .pipe($.ngAnnotate())
        .pipe(gulp.dest(config.jsRoot))
});

gulp.task("templates",function(){
    return gulp.src(config.htmlTemplatesFiles)
        .pipe($.minifyHtml({empty:true}))
        .pipe($.angularTemplatecache(config.ngTemplates.filename,
                config.ngTemplates.options))
        .pipe(gulp.dest(config.htmlTemplates+'cache/'));
});

var wiredep=require('wiredep').stream;
gulp.task('inject',['styles','es6','templates'],function(){
    return gulp.src(config.htmlFiles)
        .pipe(wiredep(config.wiredepOptions))
        .pipe($.inject(gulp.src(config.jsDistFiles),{relative:true}))
        .pipe($.inject(gulp.src(config.cssFiles),{relative:true}))
        .pipe($.inject(gulp.src(config.templatesCache,{read:false}),
            {starttag: '<!-- inject:templates.js -->',relative:true}))
        .pipe(gulp.dest(config.appRoot));
});

gulp.task('js-watch',['es6'],function(){
    browserSync.reload();
});

gulp.task('clean-build', function () {
    return clean(config.build+'/**');
});

gulp.task('copy',['clean-build'],function(){
    return gulp.src(config.staticFiles)
        .pipe($.copy(config.build,{prefix:1}));
});

gulp.task('bundle',['inject','copy'],function(){
    return gulp.src(config.htmlFiles)
        .pipe($.useref())
        .pipe($.if('**/*.js',$.uglify({mangle:true})))
        .pipe($.if('**/*.css',$.csso()))
        .pipe(gulp.dest(config.build));

});



var del=require('del')
function clean(path){
    return del(path);
}