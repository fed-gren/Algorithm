#include <iostream>
#include <vector>

using namespace std;

int n;

int main()
{
  cin >> n;
  int temp;
  int *dp = new int[n + 1];
  int *stair = new int[n + 1];

  for (int i = 1; i <= n; i += 1)
  {
    cin >> temp;
    stair[i] = temp;
  }

  dp[0] = stair[0];
  dp[1] = max(stair[0] + stair[1], stair[1]);
  dp[2] = max(stair[2] + stair[1], stair[2] + stair[0]);
  for (int i = 3; i <= n; i += 1)
  {
    dp[i] = max(dp[i - 3] + stair[i - 1] + stair[i], dp[i - 2] + stair[i]);
  }
  cout << dp[n];
}