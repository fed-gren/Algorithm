#include <iostream>

using namespace std;

int main() {
  int n;
  cin >> n;
  int sum = 0;
  getc(stdin);
  while((n--) > 0) {
    int val = getc(stdin) - '0';
    sum += val;
  }
  cout << sum;
}