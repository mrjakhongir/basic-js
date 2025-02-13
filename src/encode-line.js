const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return "";
  let stack = [];
  let encodedStr = "";
  for (let i = 0; i < str.length; i += 1) {
    if (stack[stack.length - 1] === str[i] || stack.length === 0) {
      stack.push(str[i]);
    } else {
      if (stack.length > 1) {
        encodedStr += stack.length + stack[0];
      } else {
        encodedStr += stack[0];
      }
      stack = [str[i]];
    }
  }
  if (stack.length > 1) {
    return (encodedStr += stack.length + stack[0]);
  } else {
    return (encodedStr += stack[0]);
  }
}

module.exports = {
  encodeLine,
};
