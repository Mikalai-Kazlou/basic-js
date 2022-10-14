const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct = true) {
    this.reverse = !direct;

    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    this.square = this.generateSquare(this.letters);
  }

  generateSquare(letters) {
    const square = [];
    for (let i = 0; i < letters.length; i++) {
      square[i] = letters.slice(i).concat(letters.slice(0, i));
    }
    return square;
  }

  encrypt(txt, key) {
    if (!txt || !key) {
      throw new Error('Incorrect arguments!');
    }
    txt = txt.toUpperCase();
    key = key.toUpperCase();

    let str = '';
    for (let i = 0, j = 0; i < txt.length; i++) {
      if (this.letters.includes(txt[i])) {
        j = (j + key.length) % key.length;

        const row = this.letters.indexOf(key[j]);
        const col = this.letters.indexOf(txt[i]);

        str += this.square[col][row];

        j++;
      } else {
        str += txt[i];
      }
    }

    if (this.reverse) {
      return str.split('').reverse().join('');
    } else {
      return str;
    }
  }

  decrypt(txt, key) {
    if (!txt || !key) {
      throw new Error('Incorrect arguments!');
    }
    txt = txt.toUpperCase();
    key = key.toUpperCase();

    let str = '';
    for (let i = 0, j = 0; i < txt.length; i++) {
      if (this.letters.includes(txt[i])) {
        j = (j + key.length) % key.length;

        const row = this.letters.indexOf(key[j]);
        const col = this.square[row].indexOf(txt[i]);

        str += this.letters[col];

        j++;
      } else {
        str += txt[i];
      }
    }

    if (this.reverse) {
      return str.split('').reverse().join('');
    } else {
      return str;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
