module.exports = function(){

    var root="./app/";
    var css=root+'css/';
    var templatesRoot=root+'partials/'

    var config={
        appRoot:root,
        htmlFiles:root+'/index.html',
        cssDest:css,
        jsFiles:root+'js/**/*.js',
        cssFiles:css+'**/*.css',
        sassSrc:root+'sass/**/*.scss',
        wiredepOptions:{
            bowerJson:require('./bower.json')
        },
        images:root+'img/**/*.*',
        build:'./build/',
        htmlTemplatesFiles:templatesRoot+'**/*.html',
        htmlTemplates:templatesRoot,
        ngTemplates:{
            filename:'ngTemplates.js',
            options:{
                module:'phonecatApp',
                root:'partials/',
                standalone:false
            }
        }
    }

    return config;
}
