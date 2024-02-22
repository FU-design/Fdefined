/**
 * 作用：
 * 对一个对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为；
 * 能够在读取和设置对象属性值的时候进行一些其他操作
 */
const proxy = new Proxy(
  {},
  {
    get: function (target, propKey, proxyTarget) {
      //   console.log("this :>> ", this);
      //   console.log("arguments :>> ", arguments); // 3个内置参数
      //   console.log("target :>> ", target); // 被拦截的对象
      //   console.log("propKey :>> ", propKey); // 键值（属性值）
      //   console.log("proxy :>> ", proxy); // 本身
      return Reflect.get(target, propKey);
    },
    set: function (target, propKey, newVal, proxyTarget) {
      //   console.log("arguments :>> ", arguments); // 4个内置参数
      return Reflect.set(target, propKey, newVal);
    },
  }
);

console.dir(proxy);
proxy.name = 222;
console.log("proxy :>> ", proxy);
console.log("proxy.name :>> ", proxy.name);

// ————————————————————————————————————————————————————————————————————
/**
 * 1. 创建 Proxy 实例 new Proxy(target,handler)
 * 2. 参数 target 和 handler 都是一个对象
 * 3. 若传入的 handler 是一个空对象，那么这个代理（拦截）和直接定义的对象无差别
 * 4. Proxy 实例也可以作为其他对象的原型对象
 */
{
  const target = {};
  const handler = {};
  // 使上述的 3 生效
  const object = { proxy: new Proxy(target, handler) };
  console.log("object :>> ", object);
}

// 4
{
  const proxy = new Proxy(
    {},
    {
      get: function (target, propKey) {
        return 35;
      },
    }
  );

  let obj = Object.create(proxy);
  obj.time; // 35

  console.log("obj :>> ", obj);
}

// 5
{
  const handler = {
    get: function (target, name) {
      if (name === "prototype") {
        return Object.prototype;
      }
      return "Hello, " + name;
    },

    apply: function (target, thisBinding, args) {
      return args[0];
    },

    construct: function (target, args) {
      return { value: args[1] };
    },
  };

  var fproxy = new Proxy(function (x, y) {
    return x + y;
  }, handler);

  fproxy(1, 2); // 1
  new fproxy(1, 2); // {value: 2}
  fproxy.prototype === Object.prototype; // true
  fproxy.foo === "Hello, foo"; // true
}

{
  const handler = {
    get: function (target, name) {
      if (name === "prototype") {
        return Object.prototype;
      }
      return "Hello, " + name;
    },

    apply: function (target, thisBinding, args) {
      return args[0];
    },

    construct: function (target, args) {
      return { value: args[1] };
    },
  };

  const fproxy = new Proxy(function (x, y) {
    return x + y;
  }, handler);

  console.log(fproxy(1, 2)); // 1
  console.log(new fproxy(1, 2)); // {value: 2}
  fproxy.prototype === Object.prototype; // true
  fproxy.foo === "Hello, foo"; // true
}

/**
 * 使用get拦截，实现数组读取负数的索引。
 */
{
  function createArray(...elements) {
    let handler = {
      get(target, propKey, receiver) {
        let index = Number(propKey);
        if (index < 0) {
          propKey = String(target.length + index);
        }
        return Reflect.get(target, propKey, receiver);
      },
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target, handler);
  }

  let arr = createArray("a", "b", "c");
  arr[-1]; // c
}

/**
 * 利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作
 */

class Pipe {
  constructor(value) {
    this._value = value;
    const funcStack = [];
    const oproxy = new Proxy(
      {},
      {
        get: (pipeObject, fnName) => {
          if (fnName === "get") {
            return funcStack.reduce((val, fn) => {
              return this[`${fn}`](val);
            }, this._value);
          }
          funcStack.push(fnName);
          return oproxy;
        },
      }
    );
    return oproxy;
  }
  double(n) {
    return n * 2;
  }
  pow(n) {
    return n * n;
  }
  reverseInt(n) {
    return n.toString().split("").reverse().join("") | 0;
  }
}

const pipe1 = new Pipe(3);
console.log(".double.pow.reverseInt.get :>> ", pipe1.double.pow.reverseInt.get);
