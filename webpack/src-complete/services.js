(function(window){
'use strict';

var logger=require('./logger');
var calc = require('./calc');


var services={

    dialogs:{
        alert:function(msg){
           return window.alert(msg);
        },
        confirm:function(msg){
            return window.confirm(msg);
        },
        prompt:function(msg,value){
           return window.prompt(msg, value);
        }
    }
};
$(function(){
    logger.log('services loaded');    
});

module.exports=services;
})(window);