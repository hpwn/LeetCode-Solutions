/*
 * @lc app=leetcode id=2264 lang=javascript
 *
 * [2264] Largest 3-Same-Digit Number in String
 */

// @lc code=start
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let maxGoodInt = "";
  for (let i = 0, j = i + 2; j < num.length; i++, j++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[j]) {
      if (num[i] > maxGoodInt[0] || maxGoodInt === "") {
        maxGoodInt = num[i] + num[i] + num[i];
      }
    }
  }
  return maxGoodInt;
};
// @lc code=end
