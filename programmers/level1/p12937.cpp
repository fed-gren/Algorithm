#include <string>
#include <iostream>

using namespace std;

string solution(int num)
{
  string answer = "";
  if (num % 2 == 0)
    answer = "Even";
  else
    answer = "Odd";
  return answer;
}

int main()
{
  string ans = solution(3);
  cout << ans << "\n"; //Odd
  ans = solution(4);
  cout << ans << "\n"; //Even
}