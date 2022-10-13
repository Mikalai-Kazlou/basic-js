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
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const ts = Date.parse(date.toString());
  if (isNaN(ts)) {
    throw new Error('Invalid date!');
  }

  for (key in date) {
    throw new Error('Invalid date!');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const map = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 0];

  const validDate = new Date(ts);
  return seasons[map[validDate.getMonth()]];
}

module.exports = {
  getSeason
};
