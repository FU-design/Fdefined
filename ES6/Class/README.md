# Class

- ES6 中的 Class 写法是一种创建类的语法糖

  ```js
  // 示例：
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

    const p = new Point()
  }
  ```

  ```js
  console.log(Point); // [class Point]
  console.log(p.constructor); // [class Point]
  console.log(p); // Point { name: undefined }
  console.log(Point === Point.prototype.constructor); // true
  console.log(p.constructor === Point); // true
  console.log(p.constructor === Point.prototype.constructor); //* true -> p是Point类的实例，它的constructor()方法就是Point类原型的constructor()方法。
  console.log(Point.prototype.constructor === Point); //* true -> 类的构造函数指向它本身
  ```

- 类的数据类型是函数，类本身就指向构造函数

  ```js
  typeof Point; // "function"
  Point === Point.prototype.constructor; // true
  ```

- 类的所有方法都定义在 类的 _prototype_ 属性上

  ```js
  // 因此可以通过 Object.assign() 方法添加多个方法
  Object.assign(Point.prototype,{
    setName(){/* ... */}
    getName(){/* ... */}
  })
  ```

- 类的构造函数指向它本身

  ```js
  console.log(Point.prototype.constructor === Point); // true
  ```

- 类内部的所有定义的方法，是不能够被枚举的

  ```js
  console.log(Object.keys(Point.prototype)); // []
  console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'setName', 'getName' ]
  ```

## constructor() 方法

- 默认的方法，通过 new 关键字生成，并立即执行
- 一个类必须有此方法，若没有显示的定义，则默认会生成一个空参的构造方法
- 构造方法返回实例对象（this）,也可定义返回其他类型的值
- 构造函数不能够手动去调用，会报错，必须使用 new 关键字

## 类的实例

- 创建实例时，必须使用 new 关键字,否则会报错
- 类的属性和方法，除非显式定义在其本身（即定义在 this 对象上 -> this 对象是构造方法返回的对象，是没有包含到在构造方法外的方法的），否则都是定义在原型上（即定义在 class 上）。

  ```js
  console.log(Object.getOwnPropertyNames(p)); // [ 'name' ]
  console.log(Object.getOwnPropertyNames(p.__proto__)); // [ 'constructor', 'setName', 'getName' ]
  console.log(p.__proto__ === Point.prototype); // true

  point.hasOwnProperty("name"); // true
  point.hasOwnProperty("getName"); // false
  point.__proto__.hasOwnProperty("getName"); // true
  ```

- 类的所有实例共享一个原型对象（即类的原型对象）

  ```js
  const p1 = new Point("Amy");
  const p2 = new Point("Tom");
  console.log(p1.__proto__ === p2.__proto__); // true
  ```

- 不建议通过 **proto** 来添加共享的属性或方法，可使用 Object.getPrototypeOf() 方法来获取实例对象的原型，然后再来为原型添加方法/属性。

  ```js
  console.log(":>> ", Object.getPrototypeOf(p)); // Point.prototype (在 node 环境下运行得到的是 {}，浏览器种可查看到)
  console.log(":>> ", Object.getPrototypeOf(p) == Point.prototype); // true
  ```

## 实例属性的新写法

- 实例属性现在除了可以定义在 constructor()方法里面的 this 上面，也可以定义在类内部的最顶层。( _**ES2022**_ )

  ```js
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
  ```

## 取值函数（getter） 和 存值函数（setter）

- 与 ES5 一样，在“类”的内部可以使用 get 和 set 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

  ```js
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
  ```

- 若只写了 getter 而不写 setter 的话，是修改不了该实例属性的

  ```js
  // 没有写 setter 函数定义时
  console.log(" :>> ", employee.uname); // Sam
  employee.uname = "张三";
  console.log(" :>> ", employee.uname); // 张三
  ```

- 使用表达式的形式定义类

  ```js
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

  //# John joined the meeting.
  //# Jane joined the meeting.
  //# Peter joined the meeting.
  //# The latest attendee is Peter.
  ```

- 使用属性表达式定义类（类的属性名，可以采用表达式。）

  ```js
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
  ```

- 存值函数和取值函数是设置在属性的 Descriptor 对象上的。(略)

## 静态方法

- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
- 如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。
- 静态方法可以与非静态方法重名。

  ```js
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
  ```

- 父类的静态方法，可以被子类继承。

  ```js
  class Foo {
    static classMethod() {
      return "hello";
    }
  }

  class Bar extends Foo {}

  Bar.classMethod(); // 'hello'
  ```

- 静态方法也是可以从 super 对象上调用的。

  ```js
  class Foo {
    static classMethod() {
      return "hello";
    }
  }

  class Bar extends Foo {
    static classMethod() {
      return super.classMethod() + ", too";
    }
  }

  Bar.classMethod(); // "hello, too"
  ```

## 静态属性

- 静态属性指的是 Class 本身的属性，即 Class.propName，而不是定义在实例对象（this）上的属性.

  ```js
  // 老写法
  class Foo {
    // ...
  }
  Foo.prop = 1;

  // 新写法
  class Foo {
    static prop = 1;
  }
  ```

## 私有方法和私有属性

## javascript 继承中的 extends 和 super 关键字的使用

> 父类：

```js
class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log(`使用${this.legs}条腿走路 :>>`);
  }
}
```

- 在实现继承的时候，可省略构造器，js 会默认添加，但若写了一个空的构造函数 constructor 则就必须加上 super,否则会报错

  ```js
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
  ```

- 子类的方法存在和继承的父类父类的方法具有同名的时，子类的方法会覆盖父类的该方法。

  ```js
  class Dog extends Animal {
    constructor(legs) {
      super(legs);
    }
    walk() {
      console.log("飞快的跑 :>> ");
    }
  }
  const dog = new Dog(4);
  dog.walk(4); // 飞快的跑
  ```

- 若想在父类中调用父类中的同名方法，则可使用 super(arguments).xxxx ， xxxx 表示方法名。

  ```js
  class Dog extends Animal {
    constructor(legs) {
      super(legs);
    }
    walk() {
      super.walk(4); // 使用4条腿走路 :>>
      console.log("飞快的跑 :>> ");
    }
  }

  const dog = new Dog(4);
  dog.walk(4); // 飞快的跑
  ```

## 继承静态成员（属性和方法）

- 子类除了能够继承父类中定义的普通属性和普通方法外，还会继承父类所有的静态属性和静态方法（即 static 关键字定义的属性和方法,注：类的实例对象不会继承静态方法或属性）

  ```js
  class Biology {
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
  ```

## 继承内置类

- 继承内置类型

  ```js
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
  ```

## JavaScript new.target 属性

- 在 es6 之前的一般定义类型的函数写法中, 可以在使用该构造函数时，必须使用 new 关键字才能够调用

  ```js
  function Person(name) {
    if (!new.target) {
      throw "must use new operator with Person";
    }
    this.name = name;
  }
  ```

- 在 es6 中的 constructor 中使用, 会返回该构造函数所属的类

  ```js
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
  ```
