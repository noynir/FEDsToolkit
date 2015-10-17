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

console.log("all services go...");  
    

module.exports=services;