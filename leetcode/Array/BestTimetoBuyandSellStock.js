/**
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //현재 날부터 다음날까지 쭉 보면서 최대 이득인 날의 이득을 찾는다.
  //n * n - i == n ^ 2
  const len = prices.length;
  let current, future;
  let max = 0, profit = 0;

  for (current = 0; current < len - 1; current++) {
    for(future = current + 1; future < len; future ++) {
      // max = Math.max(max, prices[future] - prices[current]);
      profit = prices[future] - prices[current];
      max = max < profit ? profit : max;
    }
  }
  return max;
};

let ans, prices;
prices = [7, 1, 5, 3, 6, 4];
ans = maxProfit(prices);
console.log(ans); //5

prices = [7, 6, 4, 3, 1];
ans = maxProfit(prices);
console.log(ans); //0

/**
 * 현재 까지 최소값을 대입,
 * 현재 값에서 최소값을 뺀 값과 max값을 비교
 * O(n)
 */

// var maxProfit = function (prices) {
//   var min = Number.MAX_SAFE_INTEGER;
//   var max = 0;
//   for (var i = 0; i < prices.length; i++) {
//     min = Math.min(min, prices[i]);
//     max = Math.max(max, prices[i] - min);
//   }
//   return max;
// };