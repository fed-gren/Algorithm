#include <string>
#include <vector>
#include <iostream>

using namespace std;

int solution(int n)
{
  if (n == 0)
    return 0;
  int answer = 0;
  answer += n;
  int s = 1;
  while (s <= n / 2)
  {
    if (n % s == 0)
      answer += s;
    s += 1;
  }
  return answer;
}

int main()
{
  int ans = solution(12); //28
  cout << ans << "\n";
  ans = solution(5); //6
  cout << ans << "\n";
}