"use strict";
/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */
// @lc code=start
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const charMap = new Map();
    // Count occurrences of each character in s
    for (const char of s) {
        const count = charMap.get(char) || 0;
        charMap.set(char, count + 1);
    }
    // Decrement count for each character in t
    for (const char of t) {
        const count = charMap.get(char) || 0;
        if (count === 0) {
            return false; // Character not found or too many occurrences in t
        }
        charMap.set(char, count - 1);
    }
    // Optionally, ensure all counts are zero
    // This step can be skipped because the strings are of the same length
    // and we've already ensured that there are no extra characters in 't'.
    return true;
}
// @lc code=end
