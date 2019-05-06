#include <iostream>

using namespace std;

const int MAX = 123456 * 2;

bool primes[MAX+1];  //false인 경우가 소수

int main() {
  int n;
  int ans;
  primes[1] = true;
  for(int i=2; i*i<=MAX; i+=1) {
    for(int j=i*i; j<=MAX; j+=i) {
      primes[j] = true;
    }
  }
  while(true) {
    cin >> n;
    ans = 0;
    if(n == 0) break;
    for(int i=n+1; i<=2*n; i+=1) {
      if(primes[i] == false) ans += 1;
    }
    cout << ans << "\n";
  }
}