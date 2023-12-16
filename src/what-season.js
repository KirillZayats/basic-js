const { NotImplementedError } = require("../extensions/index.js");

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
    return "Unable to determine the time of year!";
  }
  try {
    if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
      throw new Error("Invalid date!");
    } else {
      let month = date.getMonth();
      if (month === 11 || month === 0 || month === 1) {
        answer = "winter";
      } else if (month >= 2 && month <= 4) {
        answer = "spring";
      } else if (month >= 5 && month <= 7) {
        answer = "summer";
      } else if (month >= 8 && month <= 10) {
        answer = "autumn";
      }
    }
  } catch (error) {
    throw new Error("Invalid date!");
  }
  return answer;
}

module.exports = {
  getSeason,
};
