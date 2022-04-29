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
 * transform( ) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  const qwe = arr;
  let newArr = arr;
  console.log(arr);
  if (Array.isArray(newArr)) {
    newArr.map((item, index) => {
      if (item === discardNext) {
        if (index === newArr.length - 1) {
          newArr.splice(newArr.indexOf(newArr[index]), 1);
        } else {
          newArr.splice(newArr.indexOf(newArr[index]), 1);
          newArr.splice(newArr.indexOf(newArr[index]), 1);
        }
      }
      if (item === discardPrev) {
        if (index === 0) {
          newArr.splice(newArr.indexOf(newArr[index]), 1);
        } else {
          newArr.splice(newArr.indexOf(newArr[index]), 1);
          newArr.splice(newArr.indexOf(newArr[index - 1]), 1);
        }
      }
      if (item === doubleNext) {
        newArr[index] = newArr[index + 1];
        if (index === newArr.length - 1) {
          newArr.splice(newArr.indexOf(newArr[index]), 1);
        }
        // newArr.splice((newArr.indexOf(newArr[index])), 1, newArr[index+1]);
      }
      if (item === doublePrev) {
        newArr[index] = newArr[index - 1];
        if (index === 0) {
          newArr.splice(newArr.indexOf(newArr[index]), 1);
        }
        // newArr.splice((newArr.indexOf(newArr[index])), 1 , newArr[index - 1]);
      }
      return newArr;
    });
  } 

  else newArr = "'arr' parameter must be an instance of the Array!";

  for (let key of newArr){
    if (
        key === discardNext ||
        key === discardPrev ||
        key === doubleNext ||
        key === doublePrev
      )
      transform(arr)
  }
  return newArr;
}

module.exports = {
  transform
};
