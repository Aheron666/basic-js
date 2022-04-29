const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  function transform(arr) {
    let discardNext = '--discard-next';
    let discardPrev = '--discard-prev';
    let doubleNext = '--double-next';
    let doublePrev = '--double-prev';
    let newArr = arr;
    if (Array.isArray(newArr)){
      newArr.map((item, index) => {
          if (item === discardNext) {
              newArr.splice((newArr.indexOf(newArr[index])), 1)
              newArr.splice((newArr.indexOf(newArr[index])), 1)
          }
          if (item === discardPrev) {
              newArr.splice((newArr.indexOf(newArr[index])), 1);
              newArr.splice((newArr.indexOf(newArr[index - 1])), 1)
          }
          if (item === doubleNext) {
              newArr.splice((newArr.indexOf(newArr[index])), 1);
              newArr[index] = newArr[index] * 2
          }
          if (item === doublePrev) {
              newArr.splice((newArr.indexOf(newArr[index])), 1);
              newArr[index - 1] = newArr[index - 1] * 2
          }
          return newArr;
        })
    }
  
    else newArr = "\'arr\' parameter must be an instance of the Array!"
   
    return newArr; 
  
  }
}

module.exports = {
  transform
};
