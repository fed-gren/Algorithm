#include <string>
#include <vector>
#include <iostream>
#include <numeric>

using namespace std;

vector<int>::iterator it;

void printVector(vector<int> v) {
  for(it=v.begin(); it!=v.end(); ++it) {
    cout << *it << " ";
  }
  cout << "\n";
}

vector<int> solution(long long n) {
    vector<int> answer;
    string numStr = to_string(n);
    int len = numStr.size();
    for(int i=len-1; i>=0; i-=1) {
      answer.push_back(numStr[i] - '0');
    }
    return answer;
}

int main() {
  vector<int> ans;
  ans = solution(12345);
  printVector(ans);
}