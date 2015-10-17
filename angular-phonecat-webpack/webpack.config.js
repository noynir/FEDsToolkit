var path = require('path');
var webpack = require('webpack');
// var resolvePlugin = new webpack.ResolverPlugin([
//     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
// ], ["normal", "loader"]);


module.exports={
    context:path.resolve('app'),
    entry:"./js/app.js",
    output:{
        path:path.resolve('app/js/build'),
        publicPath:path.resolve('app/js/build'),
        filename:"wp.bundle.js"
    },
    module:{
        // preLoaders:[
        //     {
        //         test:/\.js$/,
        //         exclude:[/node_modules/],
        //         loader:"jshint-loader"
        //     }
        // ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            "_angular":"angular"
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:"vendor",
        //     filename:"vendor.js"}),        
  

    ],
    watch:false
}