#include <iostream>

using namespace std;

int n, tc;
long long dpZero[41];
long long dpOne[41];

int main() {
  cin >> tc;
  while(tc--) {
    cin >> n;
    dpZero[0] = 1;
    dpOne[0] = 0;
    dpZero[1] = 0;
    dpOne[1] = 1;
    for(int i=2; i<=n; i+=1) {
      dpZero[i] = dpZero[i-1] + dpZero[i-2];
      dpOne[i] = dpOne[i-1] + dpOne[i-2];
    }
    cout << dpZero[n] << " " << dpOne[n] << "\n";
  }
}