const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let array = n.split("-");
  let isStatus;
  if (array.length > 0) {
    for (let index = 0; index < array.length; index++) {
      let partMac = array[index].split("");
      if (partMac.length === 2) {
        for (let j = 0; j < partMac.length; j++) {
          if (
            (partMac[j].charCodeAt() >= "0".charCodeAt() &&
              partMac[j].charCodeAt() <= "9".charCodeAt()) ||
            (partMac[j].charCodeAt() >= "A".charCodeAt() &&
              partMac[j].charCodeAt() <= "F".charCodeAt())
          ) {
            isStatus = true;
          } else {
            isStatus = false;
            j = partMac.length;
            index = array.length;
          }
        }
      } else {
        isStatus = false;
        index = array.length;
      }
    }
  } else {
    isStatus = false;
  }
  return isStatus;
}

module.exports = {
  isMAC48Address,
};
