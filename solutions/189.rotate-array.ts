/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // first intuition is to create array k length
  // copy first k elements into extra array
  // slide number[k] to number[number.length-1] down
  // copy extra array into number[k] to number[number.length-1]

  // that uses extra space though. what's another way?

  // what if we used O(1) extra space and just swapped
  // starting with any element?
  // track cur element
  // start with any element
  // copy into extra slot
  // swap with n + k slot
  // swap with n + k slot
  // ...
  // until you've done number.length swaps

  // I wonder what the third way is?
  // (is it just the reverse of method 1? create k array,
  // copy last elements, slide up, etc)
  // regardless I will proceed with the second method

  k = k % nums.length; // Handle cases where k >= nums.length
  let count = 0; // To track the number of elements moved

  for (let start = 0; count < nums.length; start++) {
    let current = start;
    let prev = nums[start];

    do {
      let next = (current + k) % nums.length;
      let temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
      count++;
    } while (start != current);
  }
}
// @lc code=end
