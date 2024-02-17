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
  constructor(flag) {
    this.flag = flag;
    this.string = "";
    this.key = "";
    this.result = "";
    this.final_result = "";
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.key_index = 0;
    this.current_cypher_counter = 0;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw Error("Incorrect arguments!");
    }
    this.string = string;
    this.key = key;

    for (let i = 0; i < this.string.length; i++) {
      if (!this.alphabet.includes(string[i].toLowerCase())) {
        this.result += string[i];
      } else {
        let difference_cypher_counter = this.alphabet.indexOf(
          `${this.key[this.key_index].toLowerCase()}`
        );
        let current_cypher_counter =
          this.alphabet.indexOf(`${this.string[i].toLowerCase()}`) +
          difference_cypher_counter;

        if (current_cypher_counter >= 26) {
          current_cypher_counter = current_cypher_counter - 26;
        }
        this.result += `${this.alphabet.at(current_cypher_counter)}`;

        this.key_index += 1;
        if (this.key_index >= this.key.length) {
          this.key_index = 0;
        }
      }
    }

    this.final_result = this.result.toUpperCase();
    this.result = "";
    this.key_index = 0;
    if (this.flag === false) {
      return this.final_result.split("").reverse().join("");
    } else return this.final_result;
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw Error("Incorrect arguments!");
    }
    for (let i = 0; i < string.length; i++) {
      if (!this.alphabet.includes(string[i].toLowerCase())) {
        this.result += string[i];
      } else {
        let difference_cypher_counter = this.alphabet.indexOf(
          `${key[this.key_index].toLowerCase()}`
        );

        let current_cypher_counter =
          this.alphabet.indexOf(`${string[i].toLowerCase()}`) -
          difference_cypher_counter;

        this.result += `${this.alphabet.at(current_cypher_counter)}`;

        this.key_index += 1;
        if (this.key_index >= key.length) {
          this.key_index = 0;
        }
      }
    }

    this.final_result = this.result.toUpperCase();
    this.result = "";
    this.key_index = 0;
    if (this.flag === false) {
      return this.final_result.split("").reverse().join("");
    } else return this.final_result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
