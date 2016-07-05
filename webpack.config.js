var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: {
        main: [
            './src/main.js',
            'react',
            'react-dom'
        ]
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/",
        filename: 'static/js/[name].bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src/bower_components']
    },
    devServer: {
        inline: true,
        port: 8485
    },
    module: {
        loaders: [
            {
                // entry 에서 지정한 이름별로 해당 js 에서 require 하는 css 파일을 불러옴
                // require('./styles/main.css); /* in main.js */ '
                test: /\.[s]?css$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=static/fonts/[name].[ext]"
            },
            {
                test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=static/fonts/[name].[ext]"
            },
            {
                test: /\.(eot|ttf|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=static/fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("static/css/[name].css"),
        new webpack.ResolverPlugin(
            // 위 resolve 에서 정의한 modulesDirectories 에서 \
            // require() 또는 import 한 패키지를 찾기 위해서 bower.json 의 main 속성을 참조함
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

