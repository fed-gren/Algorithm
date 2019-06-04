#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int ans, n, rope;
vector<int> ropes;

void solve()
{
  ans = 0;
  int ropeIdx = 0;
  sort(ropes.begin(), ropes.end());
  for (int i = 0; i < ropes.size(); i += 1)
  {
    ans = max(ans, ropes[i] * (n - i));
  }
  cout << ans;
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i += 1)
  {
    cin >> rope;
    ropes.push_back(rope);
  }
  solve();
  return 0;
}