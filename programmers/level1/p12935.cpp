#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int>::iterator it;

vector<int> solution(vector<int> arr)
{
  vector<int> answer;
  if (arr.size() == 1)
    answer.push_back(-1);
  else
  {
    int idx = 0, minIdx = 0;
    int min = INT16_MAX;
    for (it = arr.begin(); it != arr.end(); ++it)
    {
      if (min > *it)
      {
        min = *it;
        minIdx = idx;
      }
      idx += 1;
    }
    idx = 0;
    for (it = arr.begin(); it != arr.end(); ++it)
    {
      if (minIdx != idx)
      {
        answer.push_back(*it);
      }
      idx += 1;
    }
  }
  return answer;
}

int main()
{
  vector<int> ans, input;
  input.push_back(4);
  input.push_back(3);
  input.push_back(2);
  input.push_back(1);
  ans = solution(input);
  for (it = ans.begin(); it != ans.end(); ++it)
  {
    cout << *it << " ";
  }
  cout << "\n";
  input.resize(0);
  input.push_back(10);
  ans = solution(input);
  for (it = ans.begin(); it != ans.end(); ++it)
  {
    cout << *it << " ";
  }
  cout << "\n";
}