#include <iostream>
#include <stack>

using namespace std;

int main() {
  string input;
  int result = 0;
  stack<int> s;
  cin >> input;
  for(int i=0; i<input.size(); i+=1) {
    if(input[i] == '(') {
      s.push(1);
    } else if(input[i] == ')') {
      s.pop();
      if(input[i-1] == '(') {
        result += s.size();
      } else {
        result += 1;
      }
    }
  }
  cout << result;
}