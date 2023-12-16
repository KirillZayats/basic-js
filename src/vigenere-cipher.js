const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isStatus = true) {
    this.isStatus = isStatus;
    this.startCodeAt = 65;
    this.endCodeAt = 90;
    this.tableLetters = this.createTable(this.startCodeAt, this.endCodeAt);
  }

  encrypt(listLetters, key) {
    let encryptLitters = [];
    let schema = [];
    let listNormal = [];
    if (listLetters && key) {
      listLetters = this.isStatus
        ? listLetters.toUpperCase()
        : listLetters.toUpperCase().split("").reverse().join("");
      [listNormal, schema] = this.divideList(listLetters);
      key = this.createNormalKey(listNormal, key);

      for (let index = 0; index < listNormal.length; index++) {
        let codeLetters = listNormal[index].charCodeAt();
        let codeKey = key[index].charCodeAt();
        encryptLitters[index] =
          this.tableLetters[codeLetters - this.startCodeAt][
            codeKey - this.startCodeAt
          ];
      }

      let indexListNormal = 0;
      for (let index = 0; index < schema.length; index++) {
        if (schema[index] === "~") {
          schema[index] = encryptLitters[indexListNormal];
          indexListNormal++;
        }
      }
    } else {
      throw new Error("Incorrect arguments!");
    }
    return schema.join("");
  }

  decrypt(listLetters, key) {
    let schema = [];
    let listNormal = [];
    let encryptLitters = [];
    if (listLetters && key) {
      listLetters = this.isStatus
        ? listLetters.toUpperCase()
        : listLetters.toUpperCase().split("").reverse().join("");
      [listNormal, schema] = this.divideList(listLetters);
      key = this.createNormalKey(listNormal, key);
      for (let index = 0; index < listNormal.length; index++) {
        let codeLetters = listNormal[index].charCodeAt();
        let codeKey = key[index].charCodeAt();
        for (let j = 0; j < this.tableLetters.length; j++) {
          if (
            this.tableLetters[j][codeKey - this.startCodeAt] ===
            String.fromCharCode(codeLetters)
          ) {
            encryptLitters[index] = String.fromCharCode(j + this.startCodeAt);
          }
        }
      }
      let indexListNormal = 0;
      for (let index = 0; index < schema.length; index++) {
        if (schema[index] === "~") {
          schema[index] = encryptLitters[indexListNormal];
          indexListNormal++;
        }
      }
    } else {
      throw new Error("Incorrect arguments!");
    }

    return schema.join("");
  }

  divideList(listLetters) {
    let listNormal = [];
    let schema = [];

    for (let index = 0; index < listLetters.length; index++) {
      if (
        listLetters[index].charCodeAt() > this.endCodeAt ||
        listLetters[index].charCodeAt() < this.startCodeAt
      ) {
        schema.push(listLetters[index]);
      } else {
        schema.push("~");
        listNormal.push(listLetters[index]);
      }
    }

    return [listNormal, schema];
  }

  createNormalKey(listLetters, key) {
    let newKey = [];
    let lengthKey = 0;
    for (let index = 0; index < listLetters.length; index++) {
      lengthKey = index % key.length === 0 ? 0 : lengthKey;
      if (
        listLetters[index].charCodeAt() <= this.endCodeAt &&
        listLetters[index].charCodeAt() >= this.startCodeAt
      ) {
        newKey[index] = key[lengthKey].toUpperCase();
        lengthKey++;
      }
    }
    return newKey;
  }

  createTable(start, end) {
    let rows = end - start + 1;
    let setPoint = start;
    let koef = 1;
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < rows; j++) {
        if (setPoint > end) {
          setPoint = start;
        }
        matrix[i][j] = String.fromCharCode(setPoint);
        setPoint++;
      }
      setPoint = start + koef;
      koef++;
    }
    return matrix;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
