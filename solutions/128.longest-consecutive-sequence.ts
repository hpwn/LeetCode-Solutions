/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  let numSet = new Set(nums);
  // only store longest sequence length
  let res = 0;
  for (let num of numSet) {
    // check if start of sequence
    if (!numSet.has(num - 1)) {
      let count = 0;
      count++;
      while (numSet.has(num + 1)) {
        count++;
        num++;
      }
      if (count > res) {
        res = count;
      }
    }
  }
  return res;
}
// Use module.exports for CommonJS compatibility
module.exports = { longestConsecutive };
// @lc code=end
