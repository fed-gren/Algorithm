#include <iostream>
#include <math.h>

using namespace std;

int main()
{
  int n, m;
  double num;
  int ans = 0, min = 0;
  cin >> n >> m;
  for (int i = n; i <= m; i += 1)
  {
    num = sqrt(i);
    if (num - (int)num == 0)
    {
      ans += i;
      if (min == 0)
        min = i;
    }
  }
  if (ans == 0)
  {
    cout << "-1\n";
  }
  else
  {
    cout << ans << "\n";
    cout << min << "\n";
  }
}