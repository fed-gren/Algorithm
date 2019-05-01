#include <iostream>

using namespace std;
int solution(int n)
{
    int answer = 0;
    string numText = to_string(n);
    int numLen = numText.size();
    for(int i=0; i < numLen; i+=1) {
      answer += (numText[i] - '0');
    }
    return answer;
}

int main() {
  int num = 123;
  int ans = solution(num);
  cout << ans << "\n";
  num = 987;
  ans = solution(num);
  cout << ans << "\n";
}