/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  let res = true;
  let chk = board[0].map(() => 0);

  // rows
  for (const row of board) {
    chk = board[0].map(() => 0);
    for (let num of row) {
      let int = parseInt(num);
      if (num != ".") {
        chk[int - 1] += 1;
      }
      if (chk[int - 1] > 1) {
        return false;
      }
    }
  }

  // cols
  for (let i = 0; i < 9; i++) {
    chk = board[0].map(() => 0);
    for (let j = 0; j < 9; j++) {
      let num = board[j][i];
      let int = parseInt(num);
      if (num != ".") {
        chk[int - 1] += 1;
      }
      if (chk[int - 1] > 1) {
        return false;
      }
    }
  }

  // squares
  for (let k = 0; k < 3; k++) {
    for (let w = 0; w < 3; w++) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // let's say we want to find the 3 that is located at col 5, row 4
          // for the inner square, it's col 2, row 1
          // for the outer square, it's col 1, row 1
          // board[k*3+i][w*3+j] = board[5][4]
          let num = board[k * 3 + i][w * 3 + j];
          let int = parseInt(num);
          if (num != ".") {
            chk[int - 1] += 1;
          }
          if (chk[int - 1] > 1) {
            return false;
          }
        }
      }
      chk = board[0].map(() => 0);
    }
  }

  return res;
}

// Use module.exports for CommonJS compatibility
module.exports = { isValidSudoku };
// @lc code=end
