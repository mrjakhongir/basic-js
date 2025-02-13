const { NotImplementedError } = require("../extensions/index.js");

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
  let result = "";

  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  for (let i = 1; i <= repeatTimes; i += 1) {
    result += str;

    if (options.addition !== undefined) {
      for (let j = 1; j <= additionRepeatTimes; j += 1) {
        if (j === additionRepeatTimes) {
          result += options.addition;
        } else {
          result += options.addition + additionSeparator;
        }
      }
    }

    if (i !== repeatTimes) {
      result += separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
