const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let tempNumber = n + "";
  let newStr;

  for (let i = 0; i < tempNumber.length; i++) {
    newStr =
      tempNumber.slice(0, i) + tempNumber.slice(i + 1, tempNumber.length);

    if (+newStr > max) {
      max = +newStr;
    }
  }
  return max;
}

module.exports = {
  deleteDigit,
};
