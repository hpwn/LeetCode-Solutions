/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
  let maxArea = 0;
  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
      let [ind, height] = stack.pop()!;
      maxArea = Math.max(maxArea, height * (i - ind));
      start = ind;
    }
    stack.push([start, heights[i]]);
  }
  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]));
  }
  return maxArea;
}
// @lc code=end
