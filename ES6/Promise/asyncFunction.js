/**
 * @description AsynFunction
 * @param  {any}
 * @returns {Promise}
 * @statement 可包含 0 ~ n个 await 表达式，执行该表达式的时候，会暂停当前函数的执行进程，让出控制权，
 *            等待异步操作完成或者失败后，恢复原有进程，并返回异步结果作为 await 表达式的返回值。
 * @note
 * 1. awaite 一定是在 async 函数中使用
 * 2. async 函数一定返回一个 promise 对象，若为自定义返回值为常数或其他不是 promise 形式的值，则会隐式的为这个值包上一层 promise
 * 3.
 */

{
  async function test1() {
    return 1;
  }
  console.log("test1 :>> ", test1()); // Promise { 1 }

  // 等价于以下写法

  async function test2() {
    return Promise.resolve(1);
  }

  console.log("test2 :>> ", test2()); // Promise { <pending> }
}
