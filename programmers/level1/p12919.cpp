#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

string solution(vector<string> seoul)
{
  string answer = "";
  string kim = "Kim";
  vector<string>::iterator it = find(seoul.begin(), seoul.end(), kim);
  int idx = distance(seoul.begin(), it);
  answer += ("김서방은 " + to_string(idx) + "에 있다");
  return answer;
}

int main()
{
  vector<string> input;
  input.push_back("Jane");
  input.push_back("Kim");
  string ans = solution(input);
  cout << ans; //김서방은 1에 있다
}