var path=require('path');
var webpack= require('webpack');

var commonsPlugin=new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports={
    context:path.resolve('src/css'),
    entry:{
        index:'./app',
        page2:'./page2',
        vendor:['jquery']
    },
    output:{
        path:path.resolve('build'),
        publicPath:'/build',
        filename:'[name].bundle.js'
    },
    watch:true,
    module:{
        preLoaders:[
            {
                test:[/\.js$/,/\.es6$/],
                exclude:'node_modules',
                loader:'eslint-loader'
            }
        ],
        loaders:[
            {
                test:/\.es6$/,
                exclude:'node_modules',
                loader:'babel-loader'
            },
            {
                test:/\.css$/,
                exclude:'node_modules',
                loader:'style-loader!css-loader'
            },

        ]
    },
    plugins:[commonsPlugin],
    resolve:{
        extensions:['','.js','.es6']
    }

}
