var path  = require('path')
var webpack= require('webpack');

var commonsPlugin=new webpack.optimize.CommonsChunkPlugin({
   filename:'shared.bundle.js',
   minChunks:2
});

var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({   
    compress: {
        warnings: false
    }
});
var providePlugin=new webpack.ProvidePlugin({
    $:"jquery"
})
module.exports={
    context:path.resolve('src'),
    debug:true,
    devtool:'source-map',
    entry:{
        app:'./app.es6',
        services:'./services.es6'
    },
    output:{
        path:path.resolve('build'),
        filename:'[name].bundle.js'
    },
    plugins:[
        commonsPlugin,
        providePlugin,
        //uglifyPlugin
    ],
    module:{
        preLoaders:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                loader:'jshint-loader'            
            }
        ],
        loaders:[
            {
                test:/\.es6/,
                exclude:/node_modules/,
                loader:'babel-loader' 
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    resolve:{
        extensions:['','.js','.es6']
    },
    watch:false
}
