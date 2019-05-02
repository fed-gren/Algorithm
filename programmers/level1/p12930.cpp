#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string s)
{
  int sLen = s.size();
  int diffVal = 'a' - 'A';
  int cnt = 0;
  for (int i = 0; i < sLen; i += 1)
  {
    if (s[i] == ' ')
    {
      cnt = 0;
      continue;
    }
    if (cnt % 2 == 0)
    { //대문자
      if (s[i] >= (int)'a' && s[i] <= (int)'z')
      {
        s[i] -= diffVal;
      }
    }
    else
    { //소문자
      if (s[i] >= (int)'A' && s[i] <= (int)'Z')
      {
        s[i] += diffVal;
      }
    }
    cnt += 1;
  }
  return s;
}

int main()
{
  string input = "try hello world";
  string ans = solution(input);
  cout << ans << "\n"; //TrY HeLlO WoRlD
  input = "asd  asd  asd";
  ans = solution(input);
  cout << ans << "\n"; //AsD  aSd  AsD
}