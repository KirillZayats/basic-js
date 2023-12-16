const { NotImplementedError } = require("../extensions/index.js");

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
  let arrCopy;
  if (Array.isArray(arr)) {
    arrCopy = [...arr];
    let isStatusDiscard = false;
    for (let i = 0; i < arrCopy.length; i++) {
      if (typeof arrCopy[i] === "string") {
        switch (arrCopy[i]) {
          case '--discard-next':
            arrCopy.splice(i, 2);
            i--;
            isStatusDiscard = true;
            break;
          case '--discard-prev':
            if(isStatusDiscard) {
              isStatusDiscard = false;
              arrCopy.splice(i, 1)
            } else {
              i === 0 ? arrCopy.splice(i, 1) : arrCopy.splice(i - 1, 2);
            }
            i--;
            break;
          case '--double-next':
            i + 1 <= arrCopy.length - 1 ? arrCopy.splice(i, 1, arrCopy[i + 1]) : arrCopy.splice(i, 1);
            break;
          case '--double-prev':
            if(isStatusDiscard) {
              isStatusDiscard = false;
              arrCopy.splice(i, 1)
            } else {
              i === 0 ? arrCopy.splice(i, 1) : arrCopy.splice(i, 1, arrCopy[i - 1]);
            }
            i++;
            break;
        }
      }
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  return arrCopy;
}

module.exports = {
  transform,
};
