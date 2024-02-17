const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} tempObj tempObj object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let tempStr = str;
  let tempObj = options;

  let i = 0;
  do {
    switch (undefined) {
      case tempObj.repeatTimes:
        {
          tempObj.repeatTimes = 1;
        }
        break;
      case tempObj.separator:
        {
          tempObj.separator = "+";
        }
        break;
      case tempObj.addition:
        {
          tempObj.addition = "";
        }
        break;
      case tempObj.additionRepeatTimes:
        {
          tempObj.additionRepeatTimes = 1;
        }
        break;
      case tempObj.additionSeparator:
        {
          tempObj.additionSeparator = "|";
        }
        break;
    }
    i += 1;
  } while (i < 5);

  let addition = (tempObj.addition + " _____ ")
    .repeat(tempObj.additionRepeatTimes)
    .split(" _____ ");

  if (addition.length > 1) {
    addition.pop();
  }
  addition = addition.join(tempObj.additionSeparator);

  let result = (tempStr + addition + " _____ ")
    .repeat(tempObj.repeatTimes)
    .split(" _____ ");

  if (result.length > 1) {
    result.pop();
  }

  result = result.join(tempObj.separator);

  return result;
}

module.exports = {
  repeater,
};
