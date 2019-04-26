#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

bool comp(string a, string b) {
  if(a + b > b + a)
    return true;
  return false;
}

string numToString(int num)
{
  return to_string(num);
}

string solution(vector<int> numbers)
{
  string answer = "";
  vector<int>::iterator it;
  vector<string>::iterator strIt;
  vector<string> numStrs;
  bool zeroFlag = true;

  for (it = numbers.begin(); it != numbers.end(); ++it)
  {
    string numStr = numToString(*it);
    numStrs.push_back(numStr);
  }
  sort(numStrs.begin(), numStrs.end(), comp);

  for (strIt = numStrs.begin(); strIt != numStrs.end(); ++strIt)
  {
    answer += (*strIt);
    if(*strIt != "0") zeroFlag = false;
  }
  if(zeroFlag) answer = "0";
  return answer;
}

int main()
{
  vector<int> param;
  param.push_back(3);
  param.push_back(30);
  param.push_back(34);
  param.push_back(5);
  param.push_back(9);

  string ans = solution(param);
  cout << ans;
}