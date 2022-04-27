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
function dateSample(a) {
  let reg = /^\d+$/ 
  let b = a * 1;
  let res = Math.ceil((Math.log(MODERN_ACTIVITY / b) / 0.693) * HALF_LIFE_PERIOD);
  if (reg.test(res) && res > 0) return res;
  else return false;
}

module.exports = {
  dateSample
};
