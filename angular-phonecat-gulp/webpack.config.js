var path = require('path');
var webpack = require('webpack');
// var resolvePlugin = new webpack.ResolverPlugin([
//     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
// ], ["normal", "loader"]);

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    name:"vendor",
    filename:"vendor.wp.bundle.js"});

module.exports={
    context:path.resolve('app'),
    entry:{
        app:"./js/app.js",
        vendor: ['jQuery',
                'angular',
                'angular-route',
                'angular-resource',
                'angular-animate']
    },
    output:{
        path:path.resolve('app/js/build'),
        filename:"wp.bundle.js"
    },
    module:{
        preLoaders:[
            {
                test:/\.js$/,
                exclude:[/node_modules/],
                loader:"jshint-loader"
            }
        ]
    },
    plugins:[
        commonsPlugin
    ],
    watch:true
}