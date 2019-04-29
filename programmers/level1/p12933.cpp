#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool desc(char ch1, char ch2)
{
  return ch1 > ch2;
}

long long solution(long long n)
{
  long long answer = 0;
  string numText = to_string(n);
  sort(numText.begin(), numText.end(), desc);
  answer = stoll(numText);
  return answer;
}

int main()
{
  long long ans = solution(118372);
  cout << ans; //873211
}