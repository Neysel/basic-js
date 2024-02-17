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
function sortByHeight(ar) {
  let indexesNumbers = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] !== -1) {
      indexesNumbers.push(i);
    }
  }

  let filteredArray = ar.filter((elem) => elem !== -1);
  let sortedArr = filteredArray.sort((a, b) => a - b);

  let finalArray = ar;

  for (let i = 0; i < sortedArr.length; i++) {
    finalArray[indexesNumbers[i]] = sortedArr[i];
  }

  return finalArray;
}

module.exports = {
  sortByHeight,
};
