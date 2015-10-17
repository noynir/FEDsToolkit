var path=require('path');


module.exports={
    context:path.resolve('src/es6'),
    entry:['./app'],
    output:{
        path:path.resolve('build'),
        publicPath:'/build',
        filename:'bundle.js'
    },
    watch:true,
    module:{
        preLoaders:[
            {
                test:/\.es6$/,
                exclude:'node_modules',
                loader:'eslint-loader'
            }
        ],
        loaders:[
            {
                test:/\.es6$/,
                exclude:'node_modules',
                loader:'babel-loader'
            }
            
        ]
    },
    resolve:{
        extensions:['','.js','.es6']
    }

}
