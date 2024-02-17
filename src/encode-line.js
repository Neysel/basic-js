const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let tempArr = str.split("");
  let finalArray = [];

  let tempLetter = tempArr[0];
  let counter = 0;
  for (let i = 0; i <= tempArr.length; i++) {
    if (tempLetter !== tempArr[i] || i === tempArr.length) {
      if (counter > 1) {
        finalArray.push(counter);
      }
      finalArray.push(tempLetter);
      tempLetter = tempArr[i];
      counter = 0;
    }
    counter += 1;
  }

  return finalArray.join("");
}

module.exports = {
  encodeLine,
};
