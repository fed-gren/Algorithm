#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool solution(int x) {
  bool answer = true;
  string numText = to_string(x);
  int numCnt = numText.size();
  int sumNum = 0;
  int num = x;
  for(int i=0; i<numCnt; i+=1) {
    sumNum += (num%10);
    num /= 10;
  }
  if(x % sumNum != 0) answer = false;
  return answer;
}

int main() {
  bool ans = solution(10);
  cout << ans << "\n";  //t
  ans = solution(12);
  cout << ans << "\n";  //t
  ans = solution(11);
  cout << ans << "\n";  //f
  ans = solution(13);
  cout << ans << "\n";  //f
}