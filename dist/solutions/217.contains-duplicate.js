"use strict";
/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */
// notes: depending on time/memory needs you can sort in place
// this will reduce worst case time to O(nlogn)
// but improve memory to O(1)
// @lc code=start
function containsDuplicate(nums) {
    const numSet = new Set();
    for (let num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        else {
            numSet.add(num);
        }
    }
    return false;
}
// @lc code=end
