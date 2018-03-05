var htmlWebpackPlugin = require('html-webpack-plugin'); //建立对插件的引用
var path = require('path');
 // common.js模块化文件配置
module.exports = {
  // context:__dirname,
  entry:'./src/script/app.js',
  output:{
    path:'./dist',          //打包后的文件输出位置
    filename:'js/[name].bundle.js',      //打包后的文件名字
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:path.resolve(__dirname,'node_modules'),
        include:path.resolve(__dirname,'src'),
        query:{
          presets:['latest']
        }
      },
      {
        test:/\.css$/,
        loaders:[
            'style-loader',
            'css-loader?importLoaders=1',
            // 'postcss-loader'
        ],
        // options:{
        //   plugins:function(){
        //     require('autoprefixer')({
        //       broswers:['last 5 versions']
        //     });
        //   }
        // }
      },
      // {
      //   test:/\.less$/,
      //   loaders:[
      //     'style-loader',
      //     'css-loader',
      //     'less-loader'
      //   ]
      // }
      {
        test:/\.ejs$/,
        loader:'ejs-loader'
      },
      {
        test:/\.(png|jpg|gif|svg)$/,
        loaders:[
          'url-loader?limit:10000&name=assets/[name]-[hash:5].[ext]',
          'image-webpack-loader'
        ]
      },
    ]
  },
  plugins:[
 new htmlWebpackPlugin({
   filename:'index.html',  //文件名
   inject:'body',   //脚本嵌入位置，可head或body
   template:'index.html',
   title:'This is main.html'
 }) //插件初始化,传参可把根目录index.html与动态打包生成的index.html建立联系
  ]
};
