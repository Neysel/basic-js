const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  array: [],
 
  getLength() {
    return this.array.length
  },
  addLink(value) {
    if (typeof (value) === "undefined") {
      this.array.push(`(  )`);
    } else {
      this.array.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.array[position - 1] === undefined) {
      this.array = [];
      throw Error("You can't remove incorrect link!");
    } else {
      this.array.splice(position - 1, 1);
    }
    return this;
    
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    const result = this.array.join("~~");
    this.array = []
    return result;
  },
};

module.exports = {
  chainMaker,
};
