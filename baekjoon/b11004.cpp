//K 번째 수
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;
int n, k, num;
vector<int> nums;

int main()
{
  cin.tie(NULL);
  ios::sync_with_stdio(false);
  cin >> n >> k;
  while (n--)
  {
    cin >> num;
    nums.push_back(num);
  }
  sort(nums.begin(), nums.end());
  cout << nums[k - 1];
}