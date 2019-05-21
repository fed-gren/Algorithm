let dp = [];

function shapeArea(n) {
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i += 1) {
    dp[i] = dp[i - 1] + (i - 1) * 4;
  }
  return dp[n];
}

let ans, input;

input = 2;
ans = shapeArea(input);
console.log(ans); //5
input = 3;
ans = shapeArea(input);
console.log(ans); //13
