/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  // check middle row
  let midRow = Math.floor((matrix.length - 1) / 2);

  let matMid = matrix[midRow] || [];

  // if target in row, return true
  // .includes is O(n), use binary search on row instead if needed
  if (matMid.includes(target)) return true;
  // if target > row[last] slice upper half
  else if (target > matMid[matMid.length - 1])
    return searchMatrix(matrix.slice(midRow + 1), target);
  // else if target < row[first] slice lower half
  else if (target < matMid[0])
    return searchMatrix(matrix.slice(0, midRow), target);

  return false;
}
// @lc code=end
