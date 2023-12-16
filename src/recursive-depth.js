const { NotImplementedError } = require('../extensions/index.js');

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

  calculateDepth( arr ) {
    let maxValue = 0;
    let count = 1;
    for (let index = 0; index < arr.length; index++) {
      if (Array.isArray(arr[index])) {
        let value = this.calculateDepth(arr[index]);
        maxValue = value > maxValue ? value : maxValue;
      } 
    }
    return count + maxValue;
  }
}

module.exports = {
  DepthCalculator
};
