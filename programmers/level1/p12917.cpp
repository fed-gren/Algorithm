#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

bool compare(char s1, char s2)
{
  return s1 > s2;
}

string solution(string s)
{
  string answer = "";
  sort(s.begin(), s.end(), compare);
  answer = s;
  return answer;
}

int main()
{
  string ans = solution("Zbcdefg");
  cout << ans; //gfedcbZ
}