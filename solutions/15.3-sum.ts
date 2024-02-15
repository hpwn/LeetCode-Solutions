/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  let triplets = [];
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue; // Skip duplicate values for the first number

    let L = i + 1;
    let R = sorted.length - 1;
    let target = -sorted[i];
    while (L < R) {
      const sum = sorted[L] + sorted[R];
      if (sum === target) {
        triplets.push([sorted[i], sorted[L], sorted[R]]);
        while (L < R && sorted[L] === sorted[L + 1]) L++; // Skip duplicate values for L
        while (L < R && sorted[R] === sorted[R - 1]) R--; // Skip duplicate values for R
        L++;
        R--;
      } else if (sum < target) {
        L++;
      } else {
        R--;
      }
    }
  }
  return triplets;
}
// @lc code=end
