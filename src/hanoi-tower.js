const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // n: number of disks; serves as the problem size for recursion
  // from: the "from" tower is where the disks are placed
  // to: the "to" tower is where the disks must be finally placed
  // via: the "via" tower is that used as an intermediate location as disks are moved between the towers from and to.

  n = disksNumber;
  from = 0;
  to = 2;
  via = 1;

  let countSteps = 2 ** disksNumber - 1;

  // Hanoi(n, from, to, via);

  let secondsToSolve = countSteps / (turnsSpeed / 60 / 60);
  return { turns: countSteps, seconds: Math.floor(secondsToSolve) };
}

module.exports = {
  calculateHanoi,
};
