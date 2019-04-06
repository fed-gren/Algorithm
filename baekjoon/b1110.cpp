#include <iostream>
#include <string>

using namespace std;

int main()
{
  string str = "";
  cin >> str;
  string originNum = str;
  int cnt = 0;
  while (true) {
    cnt += 1;
    int strLen = str.length();
    int a = 0, b = 0, c = 0;
    if (strLen == 1) {
      a = 0;
      b = str[0] - '0';
    } else {
      a = str[0] - '0';
      b = str[1] - '0';
    }

    c = a + b;
    if(c > 9) {
      c %= 10;
    }
    if(b == 0) {
      str = to_string(c);
    } else {
      str = to_string(b) + to_string(c);
    }
    if(str == originNum) break;
  }
  cout << cnt;
}