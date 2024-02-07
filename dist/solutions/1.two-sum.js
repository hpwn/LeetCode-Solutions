"use strict";
/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */
// @lc code=start
function twoSum(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // TypeScript non-null assertion
        }
        else {
            numMap.set(nums[i], i);
        }
    }
    return []; // Just to satisfy TypeScript, but in practice, you'd have returned by now.
}
// @lc code=end
