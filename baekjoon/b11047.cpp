#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int ans = 0;
vector<int> coins;

bool comp(int a, int b) {
  return a > b;
}

void solve(int n, int k) {
  for(int i=0; i<coins.size(); i++) {
    if(k >= coins[i]) {
      ans += (k / coins[i]);
      k -= (coins[i] * (k / coins[i]));
    }
  }
}

int main() {
  int n, k, coin;
  cin >> n >> k;
  for(int i=0; i<n; i+=1) {
    cin >> coin;
    coins.push_back(coin);
  }
  sort(coins.begin(), coins.end(), comp);
  solve(n, k);
  cout << ans << "\n";
}
