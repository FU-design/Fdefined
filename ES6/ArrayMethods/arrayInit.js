//? 推荐使用第一种
//todo 1. Array.prototype.constructor
{
  const arr = new Array(6).map(() => 1);
  console.log(arr);
  //   [ <6 empty items> ]
}

//todo 2. Array.prototype.from()
{
  const arr = Array.from({ length: 6 }).map(() => 1);
  console.log(arr);
  //   [ undefined, undefined, undefined, undefined, undefined, undefined ]
}

//todo 3. Array.prototype.fill()
{
  const arr = new Array(6).fill(1);
  console.log(arr);
  //  [ 1, 1, 1, 1, 1, 1 ]
}

/**
 * @description 生成随机元素的数组
 * @returns 随机数数组
 */
const getRandomArr = (len) => {
  return Array.from(
    new Set(
      new Array(len).fill(1).map((v, idx) => Math.floor(Math.random() * 100))
    )
  );
};

const getSortArr = (len) => {
  return new Array(len).fill(1).map((v, idx) => idx);
};

module.exports = {
  getSortArr,
  getRandomArr,
};
