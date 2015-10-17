var gulp=require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');

gulp.task('lint',function(){
    log("Linting js source");
    return gulp.src(['app/js/**/*.js'])
        .pipe(eslint({useEslintrc:true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('styles',function(){
    
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({browsers:['last 3 versions']}))
        .pipe(gulp.dest('./app/css'));
})


function log(msg){
    util.log(util.colors.blue(msg));
}


