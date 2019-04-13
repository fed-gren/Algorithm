#include <iostream>
using namespace std;

int main() {
  int n, lenUp = 0, maxLenUp = 0, before = 0;
  bool flag = false;
  cin >> n;
  cin >> before;
  n  -= 1;
  while(n--) {
    int current = 0;
    cin >> current;
    if(before < current) {
      flag = true;
      lenUp += (current - before);
    } else {
      if(maxLenUp < lenUp) maxLenUp = lenUp;
      lenUp = 0;
    }
  before = current;
  }
  if(maxLenUp < lenUp) maxLenUp = lenUp;
  if(flag) cout << maxLenUp;
  else cout << 0;
}