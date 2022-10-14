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
  if (!str) return '';

  let encoded = '';
  let char = str[0];
  let count = 1;

  function collectedChar() {
    return ((count > 1) ? count : '') + char;
  }

  for (let i = 1; i < str.length; i++) {
    if (char !== str[i]) {
      encoded += collectedChar();
      count = 1;
    } else {
      count++;
    }
    char = str[i];
  }

  encoded += collectedChar();
  return encoded;
}

module.exports = {
  encodeLine
};
