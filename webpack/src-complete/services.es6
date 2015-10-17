import logger from './logger';
import {calc} from './calc';

logger.log('services loaded');    
$(function(){
    
});
let services={

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

export {services};
