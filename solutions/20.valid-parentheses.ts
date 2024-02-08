/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  // More optimal solution:
  // Map closing chars to opening chars

  if (s.length == 1) {
    return false;
  }
  let charStack = [];
  for (let char of s) {
    if (char == "(") {
      charStack.push(char);
    }
    if (char == "{") {
      charStack.push(char);
    }
    if (char == "[") {
      charStack.push(char);
    }
    if (char == ")") {
      if (charStack[charStack.length - 1] == "(") {
        charStack.pop();
      } else {
        return false;
      }
    }
    if (char == "}") {
      if (charStack[charStack.length - 1] == "{") {
        charStack.pop();
      } else {
        return false;
      }
    }
    if (char == "]") {
      if (charStack[charStack.length - 1] == "[") {
        charStack.pop();
      } else {
        return false;
      }
    }
  }
  // stack at end must be empty to be valid
  if (charStack.length != 0) {
    return false;
  } else {
    return true;
  }
}
// @lc code=end
