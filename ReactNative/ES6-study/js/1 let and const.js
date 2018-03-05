// 闭包
// 函数自执行
// 变量先声明再使用（未声明的变量）
// apply/call/bind/prototype

// var定义变量存在变量提升，脚本运行时，变量已存在，但是没有值

// 一、let命令、const命令

/*
1、let、const声明的变量只在块级作用域有效
外层作用域无法读取内层作用域的变量
内层作用域可以定义外层作用域的同名变量
块级作用域的出现，使立即执行函数表达式（IIFE）不再必要
 */

{
  let a = 10;
  var b = 1;
}

a  // ReferenceError: a is not defined.
b // 1

// 立即执行函数
(function () {
  var tmp = ...;
  ...
}());


/*
 2、暂时性死区
 用let、const声明的变量在其作用域内存在暂时性死区，在变量生命赋值语句前调用这个变量会报错
 */



function bar(x = y, y = 2) {   // 函数参数默认声明变量，y未先声明再使用报错
  return [x, y];
}

bar(); // 报错

// ---------------

function bar(x = 2, y = x) { // 函数参数默认声明变量，x先声明再使用不报错
  return [x, y];
}
bar(); // [2, 2]

// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
// 

/*
3、不存在变量提升
 */

// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;



/*
4、不允许在相同作用域内，重复声明同一个变量。
 */
// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  let a = 10;
  let a = 1;
}


/*
5、块级作用域与函数声明

---只对 ES6 的浏览器实现有效---
允许在块级作用域内声明函数。
函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
同时，函数声明还会提升到所在的块级作用域的头部。

---其他环境的实现---
块级作用域的函数声明当作let处理
 */


// ***避免在块级作用域内声明函数***
// ***如果确实需要，也应该写成函数表达式，而不是函数声明语句***

// 函数声明语句
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
