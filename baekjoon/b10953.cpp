#include <iostream>

using namespace std;

int main() {
  int n, a, b;
  char ch;
  cin >> n;
  while((n--) > 0) {
    cin >> a >> ch >> b;
    cout << a + b << "\n";
  }
}