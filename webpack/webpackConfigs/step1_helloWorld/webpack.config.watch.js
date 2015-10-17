var path=require('path');


module.exports={
    context:path.resolve('src'),
    entry:'./app.js',
    output:{
        path:path.resolve('build'),
        publicPath:'/build',
        filename:'bundle.js'
    },
    watch:true

}
