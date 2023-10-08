/*
 * @Author: fuliqiang 1348994179@qq.com
 * @Date: 2023-10-08 09:06:00
 * @LastEditors: fuliqiang 1348994179@qq.com
 * @LastEditTime: 2023-10-08 10:44:19
 * @FilePath: \self-study\ES6\CommUse\常用运算符.js
 * @Description: 常用运算符
 */

const template = [
  0,
  NaN,
  "",
  false,
  true,
  null,
  undefined,
  "",
  "0",
  "false",
  -1,
  -0,
  2,
  "a",
];

{
  /**
   * @description 去除字符串，null,undefined,false,NaN,0
   */
  const res = template.filter(Boolean);
  console.log("res :>> ", res);
  // res :>>  (6) [true, '0', 'false', -1, 2, 'a']
}

{
  /**
   * @description 去除’‘，null,undefined,false,NaN,（不包含0）
   */
  const res = template.filter((val) => Boolean(val) || val === 0);
  console.log("res :>> ", res);
  // res :>>  [ 0, true, '0', 'false', -1, -0, 2, 'a' ]
}

{
  /**
   * @description ~ 位非运算符
   * - 按位非运算时，任何数字 x 的运算结果都是 -(x + 1)。
   * - 由于数字 ~-1 和 ~4294967295（2^32 - 1）均使用 32 位表示形式，它们的运算结果均为 0
   */
  const a = 5; // 00000000000000000000000000000101
  const b = -3; // 11111111111111111111111111111101

  console.log(~a); // 11111111111111111111111111111010
  // Expected output: -6

  console.log(~b); // 00000000000000000000000000000010
  // Expected output: 2

  console.log(parseInt(2 ** 32 - 1).toString(2));
  // Expected output: 11111111111111111111111111111111

  console.log(~-1); //
  // Expected output: 0
}

{
  /**
   * @description ?? 空值合并运算符
   * - 用于为变量的值为 null 或 undefined 提供默认值
   */
  const defVal = null;
  const getVal = defVal ?? "默认值"; // => defVal != null && defVal != undefined ? defVal : '默认值’
  console.log("getVal :>> ", getVal); // 默认值
}

{
  /**
   * @description ??= 空值合并赋值运算符
   * - 再给另一个存在值的变量赋值另一个变量的值，若另一个变量的值为 undefined 或 null 时，则不会赋值成功，x的不会改变
   */
  let x = 1,
    y = undefined;

  x ??= y;
  console.log("x :>> ", x); // 1
}

{
  /**
   * @description 逻辑或赋值运算符
   * - 用于给变量分配默认值,当变量为假值（false,0,undefind,空字符串,NaN,null）,才会使变量赋值成功
   */

  let z;
  z ||= 0;
}
