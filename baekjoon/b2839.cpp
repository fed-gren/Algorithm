#include <iostream>

using namespace std;

int main() {

  int n;
  cin >> n;
  int cnt = -1;  //봉지 수
  int maxFive = n / 5;
  int maxThree = n / 3;
  bool endflag = false;

  for(int three = 0; three <=maxThree; three += 1) {
    for(int five = maxFive; five >= 0; five -= 1) {
      if(three * 3 + five * 5 == n) {
        cnt = three + five;
        endflag = true;
      }
    }
    if(endflag) break;
  }
  cout << cnt << endl;
}
