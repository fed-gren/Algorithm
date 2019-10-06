/**
 * https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 * Sorting
 */
const compare = (a, b) => a - b;

function maximumToys(prices, k) {
  prices = prices.filter(price => k > price);
  prices.sort(compare);

  let sum = 0;
  let cnt = 0;
  const len = prices.length;

  for (let i = 0; i < len; i += 1) {
    sum += prices[i];
    if (sum >= k) break;
    else cnt += 1;
  }
  return cnt;
}

let prices, k, ans;
prices = [1, 12, 5, 111, 200, 1000, 10];
k = 50;
ans = maximumToys(prices, k);
console.log(ans); //4
