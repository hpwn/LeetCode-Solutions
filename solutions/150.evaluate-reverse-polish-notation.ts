/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  // pop first
  const token = tokens.pop() || "";
  // base case token is number, return it
  if (!["+", "-", "*", "/"].includes(token)) {
    return parseInt(token);
  }
  const secondTerm = evalRPN(tokens);
  const firstTerm = evalRPN(tokens);
  let res = 0;
  if (token == "+") {
    res = firstTerm + secondTerm;
  }
  if (token == "-") {
    res = firstTerm - secondTerm;
  }
  if (token == "*") {
    res = firstTerm * secondTerm;
  }
  if (token == "/") {
    res = firstTerm / secondTerm;
    // Math.floor() does not round toward zero
    // Math.trunc() works with negatives
    res = Math.trunc(res);
  }
  return res;
}
// @lc code=end
