const { NotImplementedError } = require("../extensions/index.js");

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
  let answerObj = new Object();
  if (domains.length > 0) {
    let domNew = [...domains];
    for (let index = 0; index < domNew.length; index++) {
      domNew[index] = domNew[index].split(".").reverse();
    }
    let newArray = [];
    for (let i = 0; i < domNew.length; i++) {
      for (let j = 0; j < domNew[i].length; j++) {
        newArray.push(domNew[i][j]);
      }
    }
    newArray = [...new Set(newArray)];

    let counts = [];
    let count = 0;
    for (let i = 0; i < newArray.length; i++) {
      for (let index = 0; index < domains.length; index++) {
        if (domains[index].includes(newArray[i])) {
          count++;
        }
      }
      counts.push(count);
      count = 0;
    }

    let arrayAnswer = [];
    if (counts[0] > 1) {
      for (let index = 0; index < newArray.length; index++) {
        let isStatus = true;
        for (let i = index; i < newArray.length; i++) {
          if (counts[index] > 1 && arrayAnswer.length <= newArray.length - 1) {
            arrayAnswer.push(`.${newArray[index]}`);
          } else {
            if (counts[index] > 1) {
              arrayAnswer[i] += `.${newArray[index]}`;
            } else if (isStatus) {
              isStatus = false;
              arrayAnswer[i] += `.${newArray[index]}`;
            }
          }
        }
      }
    } else {
      arrayAnswer.push(`.${newArray[0]}`);
      arrayAnswer.push(`.${newArray[0]}`);
      arrayAnswer[1] += `.${newArray[1]}`;
    }
    for (let index = 0; index < arrayAnswer.length; index++) {
      answerObj[arrayAnswer[index]] = counts[index];
    }
  }

  return answerObj;
}

module.exports = {
  getDNSStats,
};
