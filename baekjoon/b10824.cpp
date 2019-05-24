#include <iostream>
#include <string>

using namespace std;

int main()
{
  int a, b, c, d;
  cin >> a >> b >> c >> d;
  string textA, textB, textC, textD;
  textA = to_string(a);
  textB = to_string(b);
  textC = to_string(c);
  textD = to_string(d);
  string newNumA = textA + textB;
  string newNumB = textC + textD;
  long long ans = stoll(newNumA) + stoll(newNumB);
  cout << ans;
}