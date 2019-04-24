#include <iostream>

using namespace std;

int n;
int dp[101][11];
int MOD = 1000000000;
int main()
{
  cin >> n;
  for (int i = 1; i <= 9; i += 1)
  {
    dp[1][i] = 1;
  }
  for (int i = 2; i <= n; i += 1)
  {
    dp[i][0] = dp[i - 1][1] % MOD;
    for (int j = 1; j < 9; j += 1)
    {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
    }
    dp[i][9] = dp[i - 1][8] % MOD;
  }
  int answer = 0;

  for (int i = 0; i <= 9; i += 1)
  {
    answer = answer + (dp[n][i] % MOD);
    answer %= MOD;
  }
  cout << answer;
}