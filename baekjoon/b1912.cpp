#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n = 0;
  cin >> n;
  vector<int> memo(n+1, 0);
  for(int i=1; i<=n; i+=1) {
    int val = 0;
    cin >> val;
    memo[i] = val;
  }
  int max = memo[1];
  for(int i=2; i<=n; i+=1) {
    if((memo[i-1] > 0) && (memo[i-1] + memo[i] > 0)) {
      memo[i] += memo[i-1];
    }
    if(memo[i] > max) max = memo[i];
  }
  cout << max;
}