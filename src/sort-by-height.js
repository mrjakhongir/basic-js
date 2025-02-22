const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexOfOne = [];
  arr.forEach((el, index) => (el === -1 ? indexOfOne.push(index) : el));
  arr.sort((a, b) => a - b);
  arr.splice(0, indexOfOne.length);
  for (let i = 0; i < indexOfOne.length; i += 1) {
    arr.splice(indexOfOne[i], 0, -1);
  }
  return arr;
}

module.exports = {
  sortByHeight,
};
