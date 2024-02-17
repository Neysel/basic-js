const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let newStr = n.toString();
  while (newStr.length > 1) {
    let counter = 0;
    for (i = 0; i < newStr.length; i++) {
      counter += +newStr[i];
    }
    newStr = counter.toString();
  }
  return +newStr;
}

module.exports = {
  getSumOfDigits,
};
