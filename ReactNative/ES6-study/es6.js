function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
 console.log(sixth);// 5

 console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));

//  const map = new Map();

// map.set(['a'], 555);
// console.log(map.get(['a']));

// const map = new Map([
//   ['F', 'no'],
//   ['T',  'yes'],
// ]);
// 
const map = new Set([5,8,8,9,1,3,5,8,9]);
// for (let [key, value] of map) {
//   console.log(key, value);
// }

console.log('......');

const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);


console.log('generator');

// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//     var item = a[i];
//     console.log(item + ':'+typeof item)
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };

// for (var f of flat(arr)) {
//   console.log(f);
// }
// 
function* fibonacci() { // a generator function
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    console.log(curr);
    yield curr;
  }
}

fibonacci().next();

for (let n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}

class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    }
    return {done: true, value: undefined};
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

for (var value of range(0, 3)) {
  console.log(value);
}


let s = Symbol();

let obj = {
  [s](arg) { console.log(arg)}
};

obj[s](123);

let objS = {
	first:function(arg){
		console.log(arg);
	},
	second:function(arg){
		console.log(arg);
	}
}
objS.first('首次');
objS.first('第二次');

const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}
console.log(getComplement(COLOR_GREEN));

var json = {
  "code": "20323",
  "ywqqid": "",
  "req_data": {
    "khh": "3883106",
    "khmc": "古小乐1",
    "zjlb": "0",
    "zjbh": "350212199206234513",
    "yyb": "2",
    "ywdm": "20323",
    "ywqqid": "",
    "clzt": "0",
    "khlb": "0",
    "ywzh": "200883106",
    "ywxt": "1000",
    "yhdm": "50001",
    "xyhdm": "00112",
    "yhzh": " ",
    "zczh": "200263171",
    "zhzt": "0",
    "bz": "1",
    "zzhbz": "0",
    "yhzhlb": "0",
    "khrq": "20170228",
    "ycgzdbz": "1",
    "fsje": "0.00",
    "fsjedx": "零元整",
    "xyhzh": "",
    "yhmm": "",
    "xyhmm": "",
    "remark": "",
    "xcgzdfs": "2",
    "zjmm": ""
  }
}
console.log(JSON.stringify(json));


闭包
函数自执行
变量先声明再使用（未声明的变量）

// var定义变量存在变量提升，脚本运行时，变量已存在，但是没有值

// 1、let命令、const命令
// 
// let、const声明的变量只在块级作用域有效

// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

// 暂时性死区
//用let、const声明的变量在其作用域内存在暂时性死区，在变量生命赋值语句前调用这个变量会报错
//
function bar(x = y, y = 2) {
  return [x, y];
}

bar(); // 报错

// 函数参数默认声明变量

