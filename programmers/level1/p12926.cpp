#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string s, int n)
{
  int sLen = s.size();
  for(int i=0; i<sLen; i+=1) {
    if(s[i] == ' ') continue;
    if((int)s[i] >= (int)'A' && (int)s[i] <= (int)'Z') {
      for(int j=0; j<n; j+=1) {
        s[i] += 1;
        if(s[i] > (int)'Z') s[i] -= ((int)'Z' - (int)'A' + 1);
      }
    } else if((int)s[i] >= (int)'a' && (int)s[i] <= (int)'z') {
      for(int j=0; j<n; j+=1) {
        s[i] += 1;
        if(s[i] > (int)'z') s[i] -= ((int)'z' - (int)'a' + 1);
      }
    }
  }
  return s;
}

int main()
{
  string input;
  int n;
  string ans;

  input = "AB";
  n = 1;
  ans = solution(input, n);
  cout << ans << "\n";    //BC

  input = "z";
  n = 1;
  ans = solution(input, n);
  cout << ans << "\n";    //a

  input = "a B z";
  n = 4;
  ans = solution(input, n);
  cout << ans << "\n";    //e F d

  input = "z";
  n = 26;
  ans = solution(input, n);
  cout << ans << "\n";    //z
}