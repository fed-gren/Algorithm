#include <iostream>
#include <math.h>

using namespace std;

long long solution(long long n) {
    long long answer = 0;
    double long num = sqrt(n);
    if(num - (int)num == 0) {
      answer = pow(num + 1, 2);
    } else {
      answer = -1;
    }
    return answer;
}

int main() {
  long long ans = solution(121);
  cout << ans << "\n";
  ans = solution(3);
  cout << ans << "\n";
}