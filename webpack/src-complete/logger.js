(function(){
    'use strict';

    var logger={

        log:function(msg){
            console.log(msg);
        },
        debug:function(obj){
            console.debug(obj);
        },
        error:function(err){
            console.error(err);
        }
    };

    module.exports=logger;

})();
