#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int>::iterator it;

int solution(vector<int> d, int budget)
{
  int answer = 0;
  sort(d.begin(), d.end());
  for(it=d.begin(); it!=d.end(); ++it) {
    budget -= *it;
    if(budget >= 0) answer += 1;
    else break;
  }
  return answer;
}

int main()
{
  vector<int> input;
  input.push_back(1);
  input.push_back(3);
  input.push_back(2);
  input.push_back(5);
  input.push_back(4);
  int ans = solution(input, 9);
  cout << ans; //3
}