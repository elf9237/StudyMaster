console.log('1、构造函数加原型链定义对象');

function classA(sColor){
	this.color = sColor;
	this.drivers = new Array("Mike","John");
};
classA.prototype.sayColor = function(){
	console.log(this.color);
};

var objA = new classA('white');
objA.drivers.push("Bill");
objA.sayColor();
console.log(objA.drivers);


console.log('2、动态原型方法定义对象');

function Car(sColor,iDoors,iMpg) {
  this.color = sColor;
  this.doors = iDoors;
  this.mpg = iMpg;
  this.drivers = new Array("Mike","John");
  
  if (typeof Car._initialized == "undefined") {
    Car.prototype.showColor = function() {
      console.log(this.color);
    };
	
    Car._initialized = true;
  }
}

var objCar = new Car('red',4,'yes');
objCar.showColor();

console.log('this指向问题研究');

function Timer(sColor){
	this.s1 = 0;
	this.s2 = 0;
	 // 箭头函数
	setInterval(() => this.s1++, 1000);
	// 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
};
var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0