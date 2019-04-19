#include <string>
#include <vector>
#include <iostream>

using namespace std;

long long *memo;

long long solution(int N)
{
  long long answer = 0;
  memo = new long long[N + 1];
  memo[0] = 1;
  memo[1] = 1;
  for (int i = 2; i <= N; i += 1)
  {
    memo[i] = memo[i - 2] + memo[i - 1];
  }
  answer = (memo[N] * 2) + (memo[N - 1] * 2);
  return answer;
}

int main()
{
  cin.tie(NULL);
  ios::sync_with_stdio(false);
  long long ans = solution(80);
  cout << ans << "\n";
}