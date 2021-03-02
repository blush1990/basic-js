const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },

  addLink(value) {
    this.result.push(`( ${value} )`);
    return chainMaker;
  },

  removeLink(position) {
    if (typeof position !== 'number') {
      this.result = [];
      throw new Error('Не корректные данные');
    }
    this.result = this.result.filter(elem => elem !== this.result[position - 1]);
    return chainMaker;
  },

  reverseChain() {
    this.result = this.result.reverse();
    return chainMaker;
  },

  finishChain() {
    const res = this.result.join("~~");
    this.result.length = [];
    return res;
  }
};

module.exports = chainMaker;
