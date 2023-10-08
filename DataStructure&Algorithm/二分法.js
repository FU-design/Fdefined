const { getRandomArr } = require("./util/index.js");
/**
 * @description 二分法
 * -----> 使用前提：
 *      1；没有重复的元素（若存在多个则只会返回第一个匹配的下标）；
 *      2：有序数组（）
 * @param {*} arr
 * @param {*} current
 * @returns
 */
const solution = (arr, current) => {
  console.time("timer"); // 程序开始时间（ms）
  let arrSort = arr.sort((a, b) => a - b);
  console.log("arrSort :>> ", arrSort);
  let left = 0;
  let right = arrSort.length - 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arrSort[mid] < current) {
      left = mid + 1;
    } else if (arrSort[mid] > current) {
      right = mid - 1;
    } else {
      console.timeEnd("timer"); // 程序结束时间（ms）
      return mid;
    }
  }
  console.timeEnd("timer"); // 程序结束时间（ms）
  return -1;
};

const arr = getRandomArr(10);
const res = solution(arr, 10);
// const res = solution([1,2,3,10,4,2,4,9,7], 2);
console.log("res :>> ", res);
