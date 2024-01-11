/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  // implementation of Boyer-Moore Voting algorithm

  // concept is rooted in pair-wise elimination
  // only the majority number survives

  let candidate = 0;
  let count = 0;

  for (let num of nums) {
    // if num == 0 then new candidate is current num
    if (count === 0) {
      candidate = num;
    }
    // increment count if num == candidate
    // decrement count if num != candidate
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
// @lc code=end
