//빠른 A+B
/*
 *  cin, cout은 scanf, printf 보다 컴파일 속도가 느리다.
 *  해결방법 1 : 그냥 scanf, printf 사용
 *  해결방법 2 : ios::sync_with_stdio(false); cin.tie(NULL);
 */

#include <iostream>

using namespace std;

int main() {
  //컴파일 속도 높이기
  cin.tie(NULL);
  ios::sync_with_stdio(false);

  int tc = 0;
  cin >> tc;
  for(int i=0; i<tc; i+=1) {
    int a=0, b=0;
    cin >> a >> b;
    cout << a + b << "\n";
  }
}