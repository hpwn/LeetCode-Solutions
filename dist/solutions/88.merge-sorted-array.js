"use strict";
/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */
// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        }
        else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
// @lc code=end
