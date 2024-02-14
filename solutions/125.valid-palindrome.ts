/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // gather array of alphanumeric characters in lowercase
  let regex = /[a-zA-Z0-9]/g;
  let anum = s.toLowerCase().match(regex);

  if (!anum?.length || anum!.length == 0 || anum!.length == 1) return true;

  // compare anum elements
  for (let i = 0; i < s.length; i++) {
    if (anum![i] != anum![anum!.length - (i + 1)]) {
      return false;
    }
  }

  return true;
}
// @lc code=end
