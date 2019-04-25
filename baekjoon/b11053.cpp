#include <iostream>

using namespace std;

int n;
int dp[1001], nums[1001];

int main()
{
  cin >> n;
  for (int i = 1; i <= n; i += 1)
  {
    cin >> nums[i];
  }

  dp[1] = 1;

  for (int i = 2; i <= n; i += 1)
  {
    int dpMax = 0;
    for (int j = 1; j <= i; j += 1)
    {
      if (nums[i] > nums[j])
      {
        if (dpMax < dp[j])
        {
          dpMax = dp[j];
        }
      }
    }
    dp[i] = dpMax + 1;
  }
  int maxVal = 0;
  for (int i = 1; i <= n; i += 1)
  {
    maxVal = max(maxVal, dp[i]);
  }
  cout << maxVal;
}