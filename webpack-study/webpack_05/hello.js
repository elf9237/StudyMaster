// common.js方式引用world.js
require('./world.js');
//引用css文件
require('./style.css');

function hello(str){
  console.log(str);
}

hello("Hello World!");
