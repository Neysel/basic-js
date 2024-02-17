const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let min;
  let max;
  if (s1.length > s2.length) {
    min = s2.split("").sort();
    max = s1.split("").sort();
  } else {
    min = s1.split("").sort();
    max = s2.split("").sort();
  }

  let tempArr = [];

  for (let i = 0; i < max.length; i++) {
    for (let j = 0; j < min.length; j++) {
      // tempArr.push(min[j]);
      if (max[i] === min[j]) {
        tempArr.push(max[i]);
        // max.splice(i, 1);
        min.splice(j, 1);
      }
    }
  }
  return tempArr.length;
}

module.exports = {
  getCommonCharacterCount,
};
