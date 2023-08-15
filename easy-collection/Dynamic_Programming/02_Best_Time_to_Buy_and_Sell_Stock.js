/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;

  for (let l = 0; l < prices.length; l++) {
    for (let r = l + 1; r < prices.length; r++) {
      if (prices[r] - prices[l] > maxProfit) {
        maxProfit = prices[r] - prices[l];
      }
    }
  }

  return maxProfit;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function _maxProfit(prices) {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      if (prices[r] - prices[l] > maxProfit) {
        maxProfit = prices[r] - prices[l];
      }
    } else {
      l = r;
    }

    r++;
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
console.log(_maxProfit(prices));
