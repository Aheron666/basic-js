const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let string = '';
  if (arr === null) return false;
  if (typeof arr !== 'object') return false;
  arr = arr.map((item) => {
    if (typeof item !== 'string') return (item = '');
    else return item.replaceAll(' ', '');
  });
  arr = arr.map((item) => {
    return item.slice(0, 1);
  });
  for (let elem of arr) {
    string = string + elem;
    string = string.toUpperCase().split('').sort().join('');
  }
  if (string === '') return false;
  return string;
}

module.exports = {
  createDreamTeam
};
