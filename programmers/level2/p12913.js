function solution(land) {
  const dp = Array.from(Array(land.length + 1), () => Array());
  for (let i = 0; i < dp.length; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      dp[i][j] = 0;
    }
  }

  let n = land.length;
  let answer = 0;
  for (let i = 0; i < n; i += 1) {
    dp[i][0] = land[i][0];
    dp[i][1] = land[i][1];
    dp[i][2] = land[i][2];
    dp[i][3] = land[i][3];
  }

  for (let i = 1; i <= n; i += 1) {
    dp[i][0] += Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
    dp[i][1] += Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
    dp[i][2] += Math.max(dp[i - 1][1], dp[i - 1][0], dp[i - 1][3]);
    dp[i][3] += Math.max(dp[i - 1][1], dp[i - 1][0], dp[i - 1][2]);
  }

  answer = Math.max(dp[n][0], dp[n][1], dp[n][2], dp[n][3]);
  return answer;
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));    //16
console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 100, 1]]));  //111
console.log(solution([[1, 2, 3, 99], [5, 6, 7, 100], [4, 3, 1, 99]]));  //205
console.log(solution([[1, 2, 200, 99], [5, 6, 7, 100], [4, 3, 1, 99]]));  //305
