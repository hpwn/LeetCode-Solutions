"use strict";
/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */
// @lc code=start
function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let res = 0;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let count = 0;
            num++;
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
