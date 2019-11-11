/**
 * @url https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */
let dp = [];

var climbStairs = function (n) {
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

let n, ans;
n = 1;
ans = climbStairs(n);
console.log(ans);

n = 2;
ans = climbStairs(n);
console.log(ans);

n = 3;
ans = climbStairs(n);
console.log(ans);

n = 4;
ans = climbStairs(n);
console.log(ans);