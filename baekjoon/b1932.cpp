#include <iostream>

using namespace std;

int n;
int dp[501][501];

int main()
{
  cin >> n;

  for(int i=1; i<=n; i+=1) {
    for(int j=1; j<=i; j+=1) {
      cin >> dp[i][j];
    }
  }

  for(int i=2; i<=n; i+=1) {
    for(int j=1; j<=i; j+=1) {
      if(j == 1) dp[i][j] += dp[i-1][j];    //왼쪽 가장자리는 윗 라인 왼쪽 가장자리에서 내려옴
      else if(j == n) dp[i][j] += dp[i-1][j-1];   //오른쪽 가장자리는 윗 라인 오른쪽 가장자리에서 내려옴
      else dp[i][j] += max(dp[i-1][j-1], dp[i-1][j]);  //그 사이에 있는 값들은 위에서 어떤 값이 더 큰지 판단해서 내려옴
    }
  }

  int maxVal = 0;
  for(int i=1; i<=n; i+=1) {
    maxVal = max(maxVal, dp[n][i]);
  }
  cout << maxVal;
}