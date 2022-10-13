const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  storage: [],

  getLength() {
    return this.storage.length;
  },

  addLink(value = '( )') {
    this.storage.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number'
      || Math.round(position) !== position
      || position > this.storage.length
      || position < 1
    ) {
      this.storage = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    this.storage.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    const copy = [];
    for (let i = this.storage.length - 1; i >= 0; i--) {
      copy.push(this.storage[i]);
    }
    this.storage = copy;
    return this;
  },

  finishChain() {
    const result = `( ${this.storage.join(' )~~( ')} )`;
    this.storage = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
