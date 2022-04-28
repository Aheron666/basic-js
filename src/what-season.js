const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasonName;
  console.log(date)
  if (Object.prototype.toString.call(date) === '[object Date]'){
      let dateMonth = date.getMonth() + 1
      console.log(dateMonth);
      if (dateMonth > 2 && dateMonth < 6)
      seasonName = 'spring'
      if (dateMonth > 5 && dateMonth < 9)
      seasonName = 'summer'
      if (dateMonth > 8 && dateMonth < 12)
      seasonName = 'autumn'
      if (dateMonth === 12 || dateMonth < 3)
      seasonName = 'winter'
  }
  else seasonName = "Invalid date!"

  if (date === undefined)
  seasonName = 'Unable to determine the time of year!';
 
  return seasonName;
}

module.exports = {
  getSeason
};
