#include <string>
#include <vector>
#include <iostream>
#include <numeric>

using namespace std;

double solution(vector<int> arr)
{
  double answer = 0;
  answer = accumulate(arr.begin(), arr.end(), 0.0) / arr.size();
  return answer;
}

int main()
{
  // [1,2,3,4]
  vector<int> input;
  input.push_back(1);
  input.push_back(2);
  input.push_back(3);
  input.push_back(4);
  double ans = solution(input);
  cout << ans << "\n"; //2.5
  input.resize(0);
  input.push_back(5);
  input.push_back(5);
  ans = solution(input);
  cout << ans << "\n"; //5
}