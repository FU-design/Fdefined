class Point {
  constructor(name) {
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// console.log("typeof Point :>> ", typeof Point); // function
// console.log("Point :>> ", Point.prototype); // {constructor: ƒ, setName: ƒ, getName: ƒ}
const p = new Point("Tom");
// console.log("p :>> ", p); // Point { name: undefined }
// console.log("p._proto_ :>> ", Object.getOwnPropertyNames(p)); // [ 'name' ]
// console.log("p._proto_ :>> ", Object.getOwnPropertyNames(p.__proto__)); // [ 'constructor', 'setName', 'getName' ]
// console.log(
//   "p.__proto__ === Point.prototype :>> ",
//   p.__proto__ === Point.prototype
// ); // true

// console.log(p.getName()); // Tom
// p.setName("Mike");
// console.log(p.getName()); // Mike
// console.log(Point.prototype.name); // undefined

// console.log(Object.keys(Point.prototype)); // []
// console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'setName', 'getName' ]

// console.log(Point); // [class Point]
// console.log(p.constructor); // [class Point]
// console.log(p); // Point { name: undefined }
// console.log(Point === Point.prototype.constructor); // true
// console.log(p.constructor === Point); // true
// console.log(p.constructor === Point.prototype.constructor); //* true -> p是Point类的实例，它的constructor()方法就是Point类原型的constructor()方法。
// console.log(Point.prototype.constructor === Point); //* true -> 类的构造函数指向它本身

// const p1 = new Point("Amy");
// console.log(p.__proto__ === p1.__proto__); // true

console.log(":>> ", Object.getPrototypeOf(p)); // Point.prototype
console.log(":>> ", Object.getPrototypeOf(p) == Point.prototype); // true

// ---------------------------------------------------------------------
//? 实例属性的新写法

class Pos {
  _x = 0;
  _y = 0;

  constructor() {}

  setPos(x, y) {
    this._x = x;
    this._y = y;
  }
}

const pos = new Pos();
console.log(pos); // Pos { _x: 0, _y: 0 }

//? 取值函数（getter） 和 存执函数（setter）
class Employee {
  _name = "";
  constructor(name) {
    this._name = name;
  }

  get uname() {
    return this._name;
  }

  // set uname(name) {
  //   this._name = name;
  // }
}

const employee = new Employee("Sam");
console.log(" :>> ", employee.uname); // Sam
employee.uname = "张三";
console.log(" :>> ", employee.uname); // 李四

// ---------------------------------------------------------------------
//? 属性表达式
let name = "fullName";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Doe");
console.log(person.fullName);

// ---------------------------------------------------------------------
//? Class 表达式
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("John").add("Jane").add("Peter");
console.log(`The latest attendee is ${meeting.latest}.`);

// ---------------------------------------------------------------------
//? 静态方法
class Person {
  static getInfo() {
    return this.getName();
  }

  static getName() {
    return "Sam";
  }

  getName() {
    return "Mike";
  }
}
const p3 = new Person();
console.log(" :>> ", Person.getName()); // Sam
// console.log(" :>> ", p3.getName()); //! error：p3.getName is not a function

console.log(" :>> ", Object.getOwnPropertyNames(Person.prototype)); //  [ 'constructor', 'getName' ]
console.log(" :>> ", Object.getOwnPropertyNames(Person)); //  [ 'length', 'name', 'prototype', 'getInfo', 'getName' ]
console.log(" :>> ", Person.getInfo()); //  Sam

// ---------------------------------------------------------------------
//?静态属性

// ---------------------------------------------------------------------
//? javascript 继承中的 extends 和 super 关键字的使用
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log(`使用${this.legs}条腿走路 :>>`);
  }
}

class Bird extends Animal {
  //* 也可直接省略,但若写了构造函数则必须要写 super()，
  //! 否则报错：ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }

  fly() {
    console.log("我会飞 :>>");
  }

  getColor() {
    return this.color;
  }
}

const bird = new Bird(4);
bird.walk(); // 使用4条腿走路
bird.fly(); // 我会飞

class Dog extends Animal {
  constructor(legs) {
    super(legs);
  }

  //* 子类的方法存在和继承的父类父类的方法具有同名的时，子类的方法会覆盖父类的该方法
  walk() {
    //* 若想在父类中调用父类中的同名方法，则可使用 super(arguments).xxxx ， xxxx 表示方法名
    super.walk(4); // 使用4条腿走路 :>>
    console.log("飞快的跑 :>> ");
  }
}

const dog = new Dog(4);
dog.walk(4); // 飞快的跑

// ---------------------------------------------------------------------
//? 继承静态成员（属性）
class Biology {
  static language = "chinese";
  constructor(name) {
    this.name = name;
  }

  static message() {
    console.log("Hi bro :>> ");
  }
}

class Human extends Biology {
  constructor(name) {
    super(name);
  }
}

// const human = new Human("Tom");
// human.message(); // human.message is not a function

Human.message(); // Hi bro :>>
console.log(" :>> ", Human.language); // chinese

// ---------------------------------------------------------------------
//? 继承内置类
class Queue extends Array {
  enqueue(e) {
    super.push(e);
  }
  dequeue() {
    return super.shift();
  }
  peek() {
    return !this.empty() ? this[0] : undefined;
  }
  empty() {
    return this.length === 0;
  }
}

var customers = new Queue();
customers.enqueue("A");
customers.enqueue("B");
customers.enqueue("C");

while (!customers.empty()) {
  console.log(customers.dequeue());
}

//? new targets
class Person {
  constructor(name) {
    this.name = name;
    console.log(new.target.name);
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
}

let john = new Person("John Doe"); // Person
let lily = new Employee("Lily Bush", "Programmer"); // Employee
