var path=require('path');
var webpack=require('webpack');

var providePlugin=new webpack.ProvidePlugin({
    "_angular":"angular"
})
module.exports={
    context:path.resolve('src'),
    entry:['./app'],
    output:{
        path:path.resolve('build'),
        publicPath:'/build',
        filename:'bundle.js'
    },
    watch:true,
    plugins:[
        providePlugin
    ],
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
