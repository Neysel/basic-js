const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }
  let timestamp = Date.parse(date);

  if (isNaN(timestamp) === true) {
    throw Error("Invalid date!");
  }
  let objectSymbols = Object.getOwnPropertySymbols(date);
  if (objectSymbols.length > 0) {
    throw Error("Invalid date!");
  }

  let givenDate = new Date(date);
  let month = givenDate.getMonth();

  if (month === 11 || month === 0 || month === 1) {
    return "winter";
  } else if (month === 2 || month === 3 || month === 4) {
    return "spring";
  } else if (month === 5 || month === 6 || month === 7) {
    return "summer";
  } else if (month === 8 || month === 9 || month === 10) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
