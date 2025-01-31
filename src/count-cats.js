const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
//  * countCats([
//  *  [0, 1, '^^'],
//  *  [0, '^^', 2],
//  *  ['^^', 1, 2]
//  * ]) => 3`
 *
 */

function countCats(cats) {
  throw new NotImplementedError('Not implemented');
  let count = 0;
  // throw new NotImplementedError('Not implemented');
  for (let elem of cats) {
    for (let key of elem) {
      if (key === '^^'){
        count++;
      } 
    }
  }
  return count;
}

module.exports = {
  countCats
};
