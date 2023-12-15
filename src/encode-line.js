const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let newStr = [...str.split('')];
  let counts = [];
  let letter = newStr[0];
  let count = 1;
  for (let index = 1; index < newStr.length; index++) {
    if (newStr[index] === letter) {
      count++;
    } else {
      counts.push(count);
      count = 1;
      letter = newStr[index];
    }
  }
  counts.push(count);
  
  for (let index = 1; index < newStr.length; index++) {
    if (newStr[index] === newStr[index - 1]) {
      newStr.splice(index, 1);
      index--;
    }
  }
  let indexCount = 0;
  for (let index = 0; index < newStr.length; index) {
    if (counts[indexCount] > 1) {
      newStr.splice(index, 0, counts[indexCount]);
      index += 2;
    } else {
      index++;
    }
    indexCount++;
  }
  return newStr.join('');
}

module.exports = {
  encodeLine
};
