const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.result = 0;
  }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.some((e) => Array.isArray(e))) {
        this.depth += 1;
        arr = arr.flat();
        this.calculateDepth(arr);
      } else {
        this.result = this.depth + 1;
        this.depth = 0;
        return this.result;
      }
    }
    return this.result;
  }
}

module.exports = {
  DepthCalculator,
};
