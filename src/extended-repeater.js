const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = String(str);

  if (options) {
    let repeatTimes = 1;
    if (options.hasOwnProperty('repeatTimes')) {
      repeatTimes = options.repeatTimes;
    }

    let separator = '+';
    if (options.hasOwnProperty('separator')) {
      separator = options.separator;
    }

    let addition = '';
    if (options.hasOwnProperty('addition')) {
      addition = String(options.addition);
    }

    let additionRepeatTimes = 1;
    if (options.hasOwnProperty('additionRepeatTimes')) {
      additionRepeatTimes = options.additionRepeatTimes;
    }

    let additionSeparator = '|';
    if (options.hasOwnProperty('additionSeparator')) {
      additionSeparator = options.additionSeparator;
    }

    const arrAdd = Array(additionRepeatTimes);
    arrAdd.fill(addition);
    result = String(str) + arrAdd.join(additionSeparator);

    const arrRes = Array(repeatTimes);
    arrRes.fill(result);
    result = arrRes.join(separator);
  }

  return result;
}

module.exports = {
  repeater
};
