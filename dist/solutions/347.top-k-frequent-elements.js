"use strict";
/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */
// @lc code=start
function topKFrequent(nums, k) {
    // initialize map for counts
    const count = new Map();
    // initialize array of empty arrays by mapping nums
    const freq = nums.map(() => []);
    // need nums.length + 1 empty arrays
    freq.push([]);
    // create map from nums
    for (const num of nums) {
        const orig = count.get(num) || 0;
        count.set(num, orig + 1);
    }
    // create frequency array from map
    count.forEach((value, key) => {
        freq[value].push(key);
    });
    // initialize return array
    const res = [];
    // populate return array
    for (let i = freq.length - 1; i >= 0; i--) {
        for (const num of freq[i]) {
            res.push(num);
            if (res.length == k) {
                return res;
            }
        }
    }
    // return for safety
    return res;
}
// @lc code=end
