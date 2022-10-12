const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const result = {};

  domains.forEach(item => {
    const parts = item.split('.');
    let property = '';

    for (let i = parts.length - 1; i >= 0; i--) {
      property += '.' + parts[i];
      result[property] = (!result[property]) ? 1 : ++result[property];
    }
  });

  return result;
}

module.exports = {
  getDNSStats
};
