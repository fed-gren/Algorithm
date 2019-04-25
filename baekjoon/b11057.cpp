#include <iostream>

using namespace std;

int dp[1001][10];
int n;

int main()
{
  cin >> n;
  for (int i = 0; i < 10; i += 1)
  {
    dp[1][i] = 1;
  }

  for (int i = 2; i <= n; i += 1)
  { //수의 길이
    for (int s = 0; s <= 9; s += 1)
    { //시작하는 수
      for (int k = s; k <= 9; k += 1)
      {
        dp[i][s] += (dp[i - 1][k] % 10007);
      }
    }
  }

  int ans = 0;
  for (int i = 0; i < 10; i += 1)
  {
    ans += (dp[n][i] % 10007);
    ans %= 10007;
  }
  cout << ans;
}