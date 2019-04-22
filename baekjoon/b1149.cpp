#include <iostream>

using namespace std;
int n;
int dp[3][1001];
int main() {
  cin >> n;
  for(int i = 0; i < n; i+=1) {
    cin >> dp[0][i] >> dp[1][i] >> dp[2][i];
  }

  for(int i=1; i <=n; i+=1) {
    dp[0][i] += min(dp[1][i-1], dp[2][i-1]);
    dp[1][i] += min(dp[0][i-1], dp[2][i-1]);
    dp[2][i] += min(dp[1][i-1], dp[0][i-1]);
  }
  int minVal = min(min(dp[0][n], dp[1][n]), dp[2][n]);
  cout << minVal;
}