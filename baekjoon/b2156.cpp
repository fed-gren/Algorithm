#include <iostream>

using namespace std;

int dp[10001], wine[10001], n;

int main()
{
  cin >> n;
  for (int i = 1; i <= n; i += 1)
  {
    cin >> wine[i];
  }
  dp[1] = wine[1];
  dp[2] = wine[2] + wine[1];
  dp[3] = max((wine[1] + wine[3]), (wine[2] + wine[3]));
  for (int i = 3; i <= n; i += 1)
  {
    dp[i] = max((dp[i - 2] + wine[i]), max((wine[i] + wine[i - 1] + dp[i - 4]), (wine[i] + wine[i - 1] + dp[i - 3])));
  }
  int maxCnt = max(max(dp[n], dp[n - 1]), dp[n - 2]);
  cout << maxCnt;
}
