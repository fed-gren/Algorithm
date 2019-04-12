#include <iostream>
#include <vector>

using namespace std;

int main() {
  int answer = 0, val = 42;
  vector<int> counter(val, 0);
  for(int i=0; i<10; i+=1) {
    int input = 0;
    cin >> input;
    counter[input%val] += 1;
  }
  for(int i=0; i<val; i+=1) {
    if(counter[i] > 0) answer += 1;
  }
  cout << answer;
}