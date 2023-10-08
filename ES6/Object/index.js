/**
 * @description Object.is(val,val)
 * @returns {boolean}
 * @isPass
 * 1. 都是undefined，null，true,false,NaN
 * 2. 都是引用类型，（地址指向相同）
 * 3. 都是 BigInt 且具有相同的数值
 * 4. 都是 symbol 且引用相同的 symbol 值
 * 5. 都是数字且符号相同（-0 和 0 是返回 false）
 * 6. 不等价于 == 也不等价于 ===
 */
{
  console.log(Object.is(-0, 0)); // false
  console.log(Object.is([], [])); // false
  console.log(Object.is({}, {})); // false
  console.log(Object.is(undefined, undefined)); // true
}
