/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max = 0;

  let L = 0;
  let R = height.length - 1;

  while (L < R) {
    max = Math.max(max, Math.min(height[L], height[R]) * (R - L));
    if (height[L] <= height[R]) {
      L++;
    } else {
      R--;
    }
  }

  return max;
}
// @lc code=end
