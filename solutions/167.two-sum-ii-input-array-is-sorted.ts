/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // used map, can also use two pointers and inc/dec comparing sum to target
  const numMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement)! + 1, i + 1]; // TypeScript non-null assertion
    } else {
      numMap.set(numbers[i], i);
    }
  }
  return [];
}
// @lc code=end
