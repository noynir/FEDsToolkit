
expport default function(){
    let logger={}
    logger.log= msg => { console.log(msg) };
    logger.debug= msg => { console.debug(msg)};
    logger.error= msg => { console.erro(msg)};
    return logger;
} 

    
   

