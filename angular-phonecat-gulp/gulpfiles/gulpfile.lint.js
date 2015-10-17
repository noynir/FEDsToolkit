var gulp=require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint',function(){
    return gulp.src(['app/js/**/*.js'])
        .pipe(eslint({useEslintrc:true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

