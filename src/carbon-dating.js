const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  let answer;
  if(typeof sampleActivity === 'string' && sampleActivity && sampleActivity > 0 && !isNaN(Number(sampleActivity))) {
    answer = Math.ceil(Math.log(15 / sampleActivity) / (Math.log(2) / 5730));
  } else {
    answer = false;
  }
  return answer < 0 ? false : answer;
}

module.exports = {
  dateSample
};
