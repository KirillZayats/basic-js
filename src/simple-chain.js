const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  getLength() {
    return this.chain.split('~~').length;
  },
  addLink( value ) {
    if (this.chain) {
      this.chain += `~~( ${value} )`;
    } else {
      this.chain = `( ${value} )`;
    }
    return chainMaker;
  },
  removeLink( position ) {
    let arrayChain = this.chain.split('~~');
    if(typeof position !== 'number' || position <= 0 || position > arrayChain.length) {
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!');
    } else {
      arrayChain.splice(position - 1, 1);
      this.chain = arrayChain.join(`~~`);
    }
    return chainMaker;
  },
  reverseChain() {
    if(this.chain) {
      let arrayChain = this.chain.split('~~');
      arrayChain.reverse();
      this.chain = arrayChain.join(`~~`);
    }
    return chainMaker;
  },
  finishChain() {
    let copy = this.chain;
    this.chain = '';
    return copy;
  }
};

module.exports = {
  chainMaker
};
