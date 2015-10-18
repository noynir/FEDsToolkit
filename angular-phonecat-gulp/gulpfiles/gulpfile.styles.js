var gulp=require('gulp');
var config = require('./gulpconfig')();
var util = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');

gulp.task('lint',function(){
    log("linting code with ESLint");
    return gulp.src(config.jsFiles)
        .pipe(eslint({useEslintrc:true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('styles',function(){
    log('Compiling SASS --> CSS'+config.sassSrc);

    return gulp.src(config.sassSrc)
        .pipe(sass())
        .pipe(autoprefixer({browsers:['last 3 versions']}))
        .pipe(gulp.dest(config.cssDest));
});



function log(msg){
    util.log(util.colors.blue(msg));
}


