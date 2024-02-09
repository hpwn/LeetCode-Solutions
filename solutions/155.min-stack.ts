/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  stack: number[] = [];
  mins: number[] = [];

  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    if (this.mins.length == 0) {
      this.mins.push(val);
      return;
    }
    if (val <= this.peek(this.mins)) {
      this.mins.push(val);
    }
  }

  pop(): void {
    if (this.peek(this.mins) == this.peek(this.stack)) {
      this.mins.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.peek(this.stack);
  }

  getMin(): number {
    return this.peek(this.mins);
  }

  peek(arr: number[]): number {
    return arr[arr.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
