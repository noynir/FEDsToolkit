module.exports = function(){

    var root="./app/";
    var css=root+'css/';
    var templatesRoot=root+'partials/'

    var config={
        appRoot:root,
        htmlFiles:root+'/*.html',
        cssDest:css,
        staticFiles:[root+'phones/**/*.*',root+'img/**/*.*',root+'/partials/**/*.html'],
        jsFiles:root+'js/**/*.js',
        jsDistFiles:root+'js/dist/**/*.js',
        jsRoot:root+'js/dist',
        cssFiles:css+'**/*.css',
        sassSrc:root+'/sass/**/*.scss',
        wiredepOptions:{
            bowerJson:require('./bower.json')
        },
        images:root+'img/**/*.*',
        build:root+'build/',
        htmlTemplatesFiles:templatesRoot+'**/*.html',
        htmlTemplates:templatesRoot,
        templatesCache:templatesRoot+'cache/**/*.js',
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
