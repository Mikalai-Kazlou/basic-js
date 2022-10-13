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

function transform(arr) {
  throw new NotImplementedError('Not implemented');

  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const result = [];
  const cs = {
    dcn: '--discard-next',
    dcp: '--discard-prev',
    dbn: '--double-next',
    dbp: '--double-prev'
  };

  function addValue(prev, curr, next) {
    result.push(curr);

    if (typeof (curr) !== 'number') {
      return;
    }

    if (prev === cs.dcn) {
      result.pop();
      return;
    }
    if (prev === cs.dbn) {
      result.push(curr);
    }
    if (next === cs.dcp) {
      result.pop();
      return;
    }
    if (next === cs.dbp) {
      result.push(curr);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!Object.values(cs).includes(arr[i])) {
      addValue(arr[i - 1], arr[i], arr[i + 1]);
    }
  }

  return result;
}

module.exports = {
  transform
};
