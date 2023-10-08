/**
题目：
 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
*/

const { getSortArr } = require("./util/index.js");

/**
 * @description 暴力解法
 * @param {*} list
 * @param {*} target
 */
const solution = function (list, target) {
  //目标值等于数组中某个元素
  //目标值在数组的首位出入
  //目标值在数组的末尾插入
  //目标值在数组中某个位置插入
  console.time("timer"); // 程序开始时间（ms）
  for (let i = 0; i < list.length; i++) {
    // 1. list[i] == target ===> 数组中存在目标值，直接返回 i 就是该目标元素在数组中的位置
    // 2. list[i] > target ===> 以为该数组是有序的，因此若数组中本身中不存在目标元素，一旦出现元素中大于目标值，则该位置就是目标值要被插入的位置
    if (list[i] >= target) {
      console.timeEnd("timer"); // 程序结束时间（ms）
      return i;
    }
  }
  //数组中不存在大于目标值的元素，则该目标值被插入的位置就是数组的末尾
  console.timeEnd("timer"); // 程序结束时间（ms）
  return list.length;
};

console.log(
  "暴力解法 ---------------------------------------------------------- :>> "
);
console.log("solution([1,3,5,6], 2) :>> ", solution([1, 3, 5, 6], 5)); // 2
console.log("solution([1,3,5,6], 2) :>> ", solution([1, 3, 5, 6], 2)); // 1
console.log("solution([1,3,5,6], 2) :>> ", solution([1, 3, 5, 6], 7)); // 4
console.log("solution([1,3,5,6], 2) :>> ", solution([1, 3, 5, 6], 0)); // 0
console.log("solution([1,3,5,6], 2) :>> ", solution(getSortArr(1000), 88)); // 88

/**
 * @description 二分法（[left,right]）
 * @param {*} arr
 * @param {*} target
 * @returns
 */
const solution2 = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((r + l) / 2);
    if (arr[mid] < target) {
      l = mid + 1;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      return mid;
    }
  }
  return r + 1;
};
console.log(
  "二分法（[left,right]） ---------------------------------------------------------- :>> "
);
console.log("solution2([1,3,5,6], 2) :>> ", solution2([1, 3, 5, 6], 5)); // 2
console.log("solution2([1,3,5,6], 2) :>> ", solution2([1, 3, 5, 6], 2)); // 1
console.log("solution2([1,3,5,6], 2) :>> ", solution2([1, 3, 5, 6], 7)); // 4
console.log("solution2([1,3,5,6], 2) :>> ", solution2([1, 3, 5, 6], 0)); // 0

/**
 * @description 二分法 （[left,right)）
 * @param {*} arr
 * @param {*} target
 * @returns
 */
const solution3 = (arr, target) => {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] > target) {
      r = m;
    } else if (arr[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return r;
};

console.log(
  "二分法 （[left,right)） ---------------------------------------------------------- :>> "
);
console.log("solution3([1,3,5,6], 2) :>> ", solution3([1, 3, 5, 6], 5)); // 2
console.log("solution3([1,3,5,6], 2) :>> ", solution3([1, 3, 5, 6], 2)); // 1
console.log("solution3([1,3,5,6], 2) :>> ", solution3([1, 3, 5, 6], 7)); // 4
console.log("solution3([1,3,5,6], 2) :>> ", solution3([1, 3, 5, 6], 0)); // 0
