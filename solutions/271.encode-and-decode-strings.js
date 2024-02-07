// Length Prefixing
class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let str of strs) {
      const len = String(str.length).padStart(3, "0");
      res += len + str;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let len = parseInt(str.substring(i, i + 3)); // Extract the length
      i += 3; // Move the index to the start of the string
      let word = str.substring(i, i + len); // Extract the string
      res.push(word);
      i += len; // Move the index to the end of the string
    }
    return res;
  }
}

// Use module.exports for CommonJS compatibility
module.exports = { encodeAndDecode };
