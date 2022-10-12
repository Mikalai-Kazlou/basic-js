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

function encodeLine(str) {
  let encoded = '';

  if (!str) return encoded;

  let char = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (char !== str[i]) {
      encoded += ((count > 1) ? count : '') + char;
      count = 1;
    } else {
      count++;
    }
    char = str[i];
  }

  encoded += ((count > 1) ? count : '') + char;
  return encoded;
}

module.exports = {
  encodeLine
};
