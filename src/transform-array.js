const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  let newArr = structuredClone(arr);
  let cloneForSplice = structuredClone(newArr);

  for (let i = 0; i < newArr.length; i++) {
    //     --discard-next excludes the next element of the array from the transformed array.
    if (newArr[i] === "--discard-next" && i !== newArr.length - 1) {
      if (typeof newArr[i + 1] === "number") {
        newArr.splice(i + 1, 1);
        cloneForSplice.splice(i + 1, 1);
      }
    }
    // --discard-prev excludes the previous element of the array from the transformed array.
    if (newArr[i] === "--discard-prev" && i !== 0) {
      if (typeof newArr[i - 1] === "number") {
        newArr.splice(i - 1, 1);
        cloneForSplice.splice(i - 1, 1);
      }
    }
    // --double-next duplicates the next element of the array in the transformed array.
    if (newArr[i] === "--double-next" && i !== newArr.length - 1) {
      if (typeof newArr[i + 1] === "number") {
        cloneForSplice.splice(i + 1, 0, newArr[i + 1]);
      }
    }
    // --double-prev duplicates the previous element of the array in the transformed array.
    if (newArr[i] === "--double-prev" && i !== 0) {
      if (typeof newArr[i - 1] === "number") {
        cloneForSplice.splice(i - 1, 0, newArr[i - 1]);
      }
    }
  }

  cloneForSplice = cloneForSplice.filter(
    (elem) =>
      elem !== "--discard-next" &&
      elem !== "--discard-prev" &&
      elem !== "--double-next" &&
      elem !== "--double-prev"
  );

  return cloneForSplice;
}

module.exports = {
  transform,
};
