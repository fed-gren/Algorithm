#include <iostream>
#include <vector>

using namespace std;

int main() {
  vector<int> memo(10000, 0);
  int n = 0;
  int sum = 0;
  cin >> n;
  memo[0] = 0;
  memo[1] = 1;
  int i=2;
  while(true) {
    memo[i] = memo[i-1] + memo[i-2];
    if(memo[i] % 2 == 0) sum += memo[i];
    if(memo[i] > n) break;
    i += 1;
  }
  cout << sum;
}