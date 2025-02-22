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
  constructor(type = true) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  checkArguments(text, key) {
    return text === undefined || key === undefined ? false : true;
  }

  prepareKey(text, key) {
    let newKey = "";
    let counter = 0;
    let keyChar = 0;
    while (newKey.length < text.length) {
      if (this.alphabet.indexOf(text[counter]) === -1) {
        newKey = newKey + " ";
      } else {
        newKey = newKey + key[keyChar % key.length];
        keyChar += 1;
      }
      counter += 1;
    }
    newKey = newKey.toUpperCase();
    return newKey;
  }

  encrypt(text, key) {
    if (this.checkArguments(text, key) === false) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    let newKey = this.prepareKey(text, key);
    let encryptedText = [];

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      if (this.alphabet.indexOf(char) === -1) {
        encryptedText.push(char);
        continue;
      }

      const resultCharIndex =
        (this.alphabet.indexOf(text[i]) + this.alphabet.indexOf(newKey[i])) %
        26;
      encryptedText.push(this.alphabet[resultCharIndex]);
    }
    return this.type
      ? encryptedText.join("")
      : encryptedText.reverse().join("");
  }
  decrypt(text, key) {
    if (this.checkArguments(text, key) === false) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    let newKey = this.prepareKey(text, key);
    let decryptedText = [];

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      if (this.alphabet.indexOf(char) === -1) {
        decryptedText.push(char);
        continue;
      }

      const resultCharIndex =
        (26 +
          this.alphabet.indexOf(text[i]) -
          this.alphabet.indexOf(newKey[i])) %
        26;
      decryptedText.push(this.alphabet[resultCharIndex]);
    }
    return this.type
      ? decryptedText.join("")
      : decryptedText.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
