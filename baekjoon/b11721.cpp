#include <iostream>

using namespace std;

int main() {
  char ch;
  int n = 0;
  while(cin >> ch) {
    n += 1;
    cout << ch;
    if(n%10 == 0) cout << "\n";
  }
}