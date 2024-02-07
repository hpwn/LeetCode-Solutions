"use strict";
/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */
// @lc code=start
function productExceptSelf(nums) {
    // initialize answer array of size nums.length
    let answer = nums.map(() => 1);
    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = pre;
        pre *= nums[i];
    }
    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= post;
        post *= nums[i];
    }
    return answer;
}
// @lc code=end
