// function add(a,b){
//   return a+b;
// }

var math = (function(){  //指定一个简易版的命名空间,定义在一个闭包里，从而隐藏内部属性
  var base = 0;
  return{
    add:function(a,b){
      return a+b+base;
    }
  };
})();
// module.exports.main = main;
