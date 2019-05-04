#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(int n, int m) {
    vector<int> answer;
    int a, b, r, temp;
    a = n;
    b = m;
    if(a < b) {
      temp = b;
      b = a;
      a = temp;
    }
    while(b != 0) {
      r = a % b;
      a = b;
      b = r;
    }
    answer.push_back(a);
    answer.push_back(n*m/a);
    return answer;
}

int main() {
  vector<int> ans;
  int n,m;
  n = 3;
  m = 12;
  ans = solution(n, m);
  n = 2;
  m = 5;
  ans = solution(n, m);

}