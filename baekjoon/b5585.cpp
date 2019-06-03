#include <iostream>

using namespace std;

int main()
{
  int n, m = 1000;
  int ans = 0;
  cin >> n;
  int chg = m - n;
  int coins[6] = {500, 100, 50, 10, 5, 1};
  for (int i = 0; i < 6; i += 1)
  {
    if (chg >= coins[i])
    {
      ans += (chg / coins[i]);
      chg -= (coins[i] * (chg / coins[i]));
      if(chg == 0) break;
    }
  }

  cout << ans;
}
