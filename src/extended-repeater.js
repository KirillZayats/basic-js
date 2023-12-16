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
  str = `${str}`;
  if (options.additionRepeatTimes) {
    for (let index = 0; index < options.additionRepeatTimes; index++) {
      if(index > 0) {
        str += options.additionSeparator ? options.additionSeparator : '|';
      }
      str += options.addition;
    }
  } else if (options.addition) {
    str += options.addition;
  }
  if(options.repeatTimes) {
    let partStr = str;
    for (let index = 0; index < options.repeatTimes - 1; index++) {
      str += options.separator ? options.separator : '+';
      str += partStr;
    }
  }
  return str;
}

console.log(
  repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })
);

module.exports = {
  repeater,
};
