var gulp=require('gulp');
var eslint = require('gulp-eslint');
var config = require('./gulpconfig')();
var util = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');

gulp.task('lint',function(){
    log("linting code with ESLint");
    return gulp.src(config.jsFiles)
        .pipe(eslint({useEslintrc:true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('clean-styles',function(){
    log('Cleaning Styles');

    var files=('./app/css/**/*.css');
    del(files);

});

gulp.task('styles',['clean-styles'],function(){
    log('Compiling SASS --> CSS'+config.sassSrc);

    return gulp.src(config.sassSrc)
        .pipe(sass())
        .pipe(autoprefixer({browsers:['last 3 versions']}))
        .pipe(gulp.dest(config.cssDest));
});


gulp.task('styles-watch',['styles'],function(){
    log('Starting styles Wacther');
    gulp.watch('app/sass/**/*.scss',['styles'])

});



function log(msg){
    util.log(util.colors.blue(msg));
}