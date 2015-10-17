(function(){

    'use strict';
    var logger= require('./logger');
    require('./calc');

    logger.log("app started");
    logger.log('app in progress');

    $(function(){
        $('body').append("<h1>Hello World</h1>");
        
    });
})();

