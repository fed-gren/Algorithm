//수 정렬하기2
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
vector<int> nums;

int main()
{
  int n, num;
  cin >> n;
  while (n--)
  {
    cin >> num;
    nums.push_back(num);
  }
  sort(nums.begin(), nums.end());
  vector<int>::iterator it;
  for (it = nums.begin(); it != nums.end(); ++it)
  {
    cout << *it << "\n";
  }
}