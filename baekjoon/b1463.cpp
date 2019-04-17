//1로 만들기
#include <iostream>
using namespace std;

int n;
int memo[1000000];

int main()
{
  cin >> n;
  memo[1] = 0;
  for (int i = 2; i <= n; i += 1)
  {
    memo[i] = memo[i - 1] + 1; //1을 빼는걸로만 만드는 경우가 최대값
    if (i % 2 == 0)
      memo[i] = min(memo[i], memo[i / 2] + 1);
    if (i % 3 == 0)
      memo[i] = min(memo[i], memo[i / 3] + 1);
  }
  cout << memo[n];
}