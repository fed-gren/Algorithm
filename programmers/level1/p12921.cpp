#include <iostream>

using namespace std;

bool isNotPrime[1000001]; //false 이면 소수

int solution(int n)
{
  int answer = 0;
  for (int i = 2; i * i <= n; i += 1)
  {
    for (int j = i * i; j <= n; j += i)
    {
      isNotPrime[j] = true;
    }
  }

  for (int i = 2; i <= n; i += 1)
  {
    if (isNotPrime[i] == false)
      answer += 1;
  }
  return answer;
}

int main()
{
  int n, ans;
  n = 10;
  ans = solution(n);
  cout << ans << "\n"; //4
  n = 5;
  ans = solution(n);
  cout << ans << "\n"; //3
}