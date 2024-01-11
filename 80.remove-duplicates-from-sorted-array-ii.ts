/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    return nums.length;
  }

  let j: number = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[j - 2]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
}
// @lc code=end
