const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let tempArr = domains;
  let finalArray = [];
  let finalObj = {};

  let count = 0;
  let maxItearionCount = 0;

  tempArr = tempArr.map((elem) => elem.split("."));
  for (let i = 0; i < tempArr.length; i++) {
    if (maxItearionCount < tempArr[i].length) {
      maxItearionCount = tempArr[i].length;
    }
  }
  let keys = [];
  // first we iterate through maxIterationCount, to iterate max times that we can using max length of arguments
  for (let i = 0; i < maxItearionCount; i++) {
    let tempArrElem = [];
    let tempElem;

    //  second we iterate through every domain
    for (let j = 0; j < tempArr.length; j++) {
      let elemLength = tempArr[j].length;
      let newTempElem;
      // if (i === 2 && tempArr[j][elemLength - 1 - i] !== undefined) {
      //   return tempArr[j][elemLength - 1 - i];
      // }
      if (tempArr[j][elemLength - 1 - i] !== undefined) {
        newTempElem = tempArr[j][elemLength - 1 - i];
        tempElem = newTempElem;
        tempArrElem.push(newTempElem);
      }
      // if (tempElem === newTempElem) {
      //   tempArrElem.push(newTempElem);
      // } else {
      //   // finalObj[`.${tempArrElem[0]}`] = tempArrElem.length;
      //   // tempArrElem = []
      // }
    }
    keys.push(tempArrElem[0]);
    finalObj[`.${keys.join(".")}`] = tempArrElem.length;
  }

  return finalObj;
}

module.exports = {
  getDNSStats,
};
