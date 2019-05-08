#include <vector>
#include <iostream>

using namespace std;
vector<int>::iterator it;
vector<int> solution(vector<int> prices)
{
  vector<int> answer;
  int i, j, t, max;
  for(i=0; i<prices.size(); i+=1) {
    max = prices[i];
    t = 0;
    for(j=i+1; j<prices.size(); j+=1) {
      if(max <= prices[j]) {
        t += 1;
      } else {
        t += 1;
        break;
      }
    }
    answer.push_back(t);
  }
  return answer;
}

void printVector(vector<int> v)
{
  for (it = v.begin(); it != v.end(); ++it)
  {
    cout << *it << " ";
  }
}

int main()
{
  vector<int> ans;
  vector<int> prices;
  // [1, 2, 3, 2, 3]
  prices.push_back(1);
  prices.push_back(2);
  prices.push_back(3);
  prices.push_back(2);
  prices.push_back(3);
  ans = solution(prices);
  printVector(ans);
}