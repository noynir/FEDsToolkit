(function(){
    'use strict';
    //var angular=require('angular');
    var logger= require('./logger');
    var appModule=_angular.module('app',[]);
    logger.log("app started");
    logger.log('app in progress');

    document.write('<h1>Hello World!!!</h1>');
    var btn=document.createElement('Button');
    btn.innerHTML="Log To Console";
    btn.onclick=function(){
        logger.log('Button Click!!!!')
    };

    document.body.appendChild(btn)   
    
})();

