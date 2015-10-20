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

gulp.task("templates",function(){
    log("Creating ng Templates Cache");

    return gulp.src(config.htmlTemplatesFiles)
        .pipe($.minifyHtml({empty:true}))
        .pipe($.angularTemplatecache(config.ngTemplates.filename,
                config.ngTemplates.options))
        .pipe(gulp.dest(config.htmlTemplates+'cache/'));
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


gulp.task('inject',['styles','templates'],function(){
    log('injecting js & css');
    var templatesCache=config.htmlTemplates+'cache/'+config.ngTemplates.filename;
    log(templatesCache);
    return gulp.src(config.htmlFiles)
        .pipe(wiredep(config.wiredepOptions))
        .pipe($.inject(gulp.src(config.jsFiles),{relative:true}))
        .pipe($.inject(gulp.src(config.cssFiles),{relative:true}))
        .pipe($.inject(gulp.src(templatesCache,{read:false}),
            {starttag: '<!-- inject:templates.js -->',relative:true}))
        .pipe(gulp.dest(config.appRoot));

});

gulp.task("images",function(){
    return gulp.src(config.images)
        .pipe($.imagemin({optimizationLevel:4}))
        .pipe(gulp.dest(config.build+'img'));
});

gulp.task('copy',function(){
    log('Copying Resources')
    return gulp.src(config.appRoot+'phones/**/*.*')
        .pipe($.copy(config.build+'phones',{prefix:2}));
});

gulp.task('bundle',['inject','copy','images'],function(){
    log('bundling assets');
    var assets=$.useref.assets();
    var cssFilter=$.filter('**/*.css',{restore:true});
    var jsFilter =$.filter('**/*.js',{restore:true});

    return gulp.src(config.htmlFiles)
        .pipe(assets)
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore)
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.build));
});


function log(msg){
    $.util.log($.util.colors.blue(msg));
}

function clean(path){
    return del(path);
}
