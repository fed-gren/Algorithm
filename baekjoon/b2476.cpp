#include <iostream>

using namespace std;

int calcPrize(int a, int b, int c) {
  int total = 0;
  if(a == b && b == c) {
    total = a * 1000 + 10000;
  } else if(a != b && b != c && c != a) {
    total = std::max(std::max(a,b),c) * 100;
  } else if(a == b) {
    total = b * 100 + 1000;
  } else if(b == c) {
    total = b * 100 + 1000;
  } else if(a == c) {
    total = a * 100 + 1000;
  }
  return total;
}

int main() {
  int n;
  cin >> n;
  int max = 0;
  int prize = 0;
  int a, b, c;
  for(int i=0; i<n; i+=1) {
    cin >> a, cin >> b, cin >> c;
    prize = calcPrize(a, b, c);
    if(max < prize) max = prize;
  }
  cout << max;
}