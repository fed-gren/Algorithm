#include <iostream>

using namespace std;

int main() {
  int ans = 0;
  int a,b,c;
  cin >> a >> b >> c;
  if(a == b && b == c) {
    ans = 10000 + (a*1000);
  } else if(a != b && b != c && a != c) {
    ans = max(a, max(b, c)) * 100;
  } else if(a == b && b != c){
    ans = 1000 + (a * 100);
  } else if(a == c && b != c) {
    ans = 1000 + (a * 100);
  } else if(b == c && a != b) {
    ans = 1000 + (b * 100);
  }

  cout << ans;
}