#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands)
{
  vector<int> answer;
  vector<int> temps;
  for (vector<int> &arr : commands)
  {
    temps.clear();
    temps.assign(array.begin() + arr[0] - 1, array.begin() + arr[1]);
    sort(temps.begin(), temps.end());
    answer.push_back(temps[arr[2] - 1]);
  }
  return answer;
}