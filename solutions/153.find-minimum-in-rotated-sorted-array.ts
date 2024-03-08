/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  // base case: nums is size 1
  if (nums.length == 1) {
    return nums[0];
  }

  // base case: nums is size 2 and nums[0] > nums[1]
  if (nums.length == 2 && nums[0] > nums[1]) {
    return nums[1];
  }

  // check sorted array
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  // check l, m, r of nums
  let l = 0;
  let m = Math.floor(nums.length / 2);
  let r = nums.length - 1;
  // either l > m or m > r
  // recurse into slice
  if (nums[m] <= nums[r]) {
    return findMin(nums.slice(0, m + 1));
  }
  return findMin(nums.slice(m + 1, nums.length));
}
// @lc code=end
