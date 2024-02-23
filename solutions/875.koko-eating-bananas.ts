/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let l = 0;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
    // get middle of l and r
    let k = Math.floor((l + r) / 2);

    // count hours for that k
    let hours = 0;
    for (let p of piles) {
      hours += Math.ceil(p / k);
    }

    // if valid amt of hrs, check against res
    // inc or dec ptrs
    if (hours <= h) {
      res = Math.min(res, k);
      r = k - 1;
    } else {
      l = k + 1;
    }
  }
  return res;
}
// @lc code=end
