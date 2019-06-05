#include <iostream>

using namespace std;

int tc, l, n;
int antPos;
int minTime, maxTime;

int main()
{
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cin >> tc;
  int tempTime;
  for (int k = 0; k < tc; k += 1)
  {
    cin >> l >> n;
    minTime = 0;
    maxTime = 0;
    for (int i = 0; i < n; i += 1)
    {
      cin >> antPos;
      tempTime = min(antPos, l - antPos);
      minTime = max(tempTime, minTime);

      tempTime = max(antPos, l - antPos);
      maxTime = max(tempTime, maxTime);
    }
    cout << minTime << " " << maxTime << "\n";
  }
}

// 10 3 2 6 7
// 4 8

// 214 7 11 12 7 13 176 23 191
//38 207