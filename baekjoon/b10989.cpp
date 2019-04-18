#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n, num, maxNum = 0;
vector<int> v(10001, 0);

int main()
{
  scanf("%d", &n);
  while (n--)
  {
    scanf("%d", &num);
    v[num] += 1;
    maxNum = max(maxNum, num);
  }
  for (int i = 1; i <= maxNum; i += 1)
  {
    for (int j = 0; j < v[i]; j += 1)
    {
      printf("%d\n", i);
    }
  }
}