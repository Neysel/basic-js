const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length < 1) {
    return [];
  }

  let tempArr;
  let FileSystem_counter = 0;
  let obj = {};

  for (let i = 0; i < names.length; i++) {
    tempArr = names.slice(0, i).concat(names.slice(i + 1, names.length - 1));
    if (i === names.length - 1) {
      tempArr = names;
    }
    // if (i == 3) {
    //   return obj[names[i]];
    // }
    if (tempArr.includes(names[i])) {
      if (obj[names[i]] === undefined) {
        obj[names[i]] = 0;
      } else {
        obj[names[i]] += 1;
      }
      if (obj[names[i]] >= 1) {
        names[i] = `${names[i]}(${obj[names[i]]})`;
        obj[`${names[i]}`] = 0;
        // return obj;
      }
    }
  }
  return tempArr;
}

module.exports = {
  renameFiles,
};
