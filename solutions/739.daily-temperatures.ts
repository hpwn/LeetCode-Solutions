/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // for each value in temps
  // compare to top of stack
  // if greater take difference of indices and store in output[index of top of stack]
  // keep doing this while top of stack less than value
  // if less add to stack
  let res = new Array<number>(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let t = temperatures[i];
    while (stack.length > 0 && t > stack[stack.length - 1].temp) {
      // non-null assertion operator
      // as we saw in 1.two-sum, even if you check for
      // undefined explicitly you'll still get an error
      // (when strict type checking is enabled)
      let { ind } = stack.pop()!;
      res[ind] = i - ind;
    }
    stack.push({ temp: t, ind: i });
  }
  return res;
}
// @lc code=end
