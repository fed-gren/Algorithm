#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<long long> solution(int x, int n)
{
  vector<long long> answer;
  int val = x;
  for (int i = 0; i < n; i += 1)
  {
    answer.push_back(x);
    x += val;
  }
  return answer;
}

int main()
{
  vector<long long> ans;
  ans = solution(2, 5);
  for (vector<long long>::iterator it = ans.begin(); it != ans.end(); ++it)
  {
    cout << *it << " ";
  }
  cout << "\n";

  ans = solution(4, 3);
  for (vector<long long>::iterator it = ans.begin(); it != ans.end(); ++it)
  {
    cout << *it << " ";
  }
  cout << "\n";

  ans = solution(-4, 2);
  for (vector<long long>::iterator it = ans.begin(); it != ans.end(); ++it)
  {
    cout << *it << " ";
  }
  cout << "\n";
}