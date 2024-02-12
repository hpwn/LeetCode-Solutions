/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {
  // Combine position and speed into pairs, sort by position in descending order
  let cars = position.map((p, i) => [p, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);

  let stack: number[] = [];

  // Process each car
  for (let [pos, spd] of cars) {
    // Calculate time to reach the destination
    let time = (target - pos) / spd;
    // If the current car reaches the destination slower than the car in front of it,
    // it means it will join the fleet in front. Otherwise, it starts a new fleet.
    if (!stack.length || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }

  // The number of fleets is the size of the stack
  return stack.length;
}
// @lc code=end
