const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  n = String(n).split('');
  let number = 0;
  for (let index = 0; index < n.length; index++) {
    number += Number(n[index]);
  }
  return number >= 10 ? getSumOfDigits(number) : number;
}

module.exports = {
  getSumOfDigits
};
