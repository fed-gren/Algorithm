#include <iostream>

using namespace std;

int dp[11], n, tc;

int main() {
  cin >> tc;
  while(tc--) {
    cin >> n;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for(int i=4; i<=n; i+=1) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
  }
  cout << dp[n] << "\n";
  }
}