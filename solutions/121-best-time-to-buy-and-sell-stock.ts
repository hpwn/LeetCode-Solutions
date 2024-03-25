function maxProfit(prices: number[]): number {
  let maxProf = 0;
  let min = 10001;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > maxProf) {
      maxProf = prices[i] - min;
    }
  }

  return maxProf;
}
