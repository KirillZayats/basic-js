const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  n = n.toString().split('');
  let max = [...n];
  max.splice(0, 1);
  max = +max.join('');
  for (let index = 1; index < n.length; index++) {
    let test = [...n];
    test.splice(index, 1);
    test = +test.join('');
    if(test > +max) {
      max = test;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
