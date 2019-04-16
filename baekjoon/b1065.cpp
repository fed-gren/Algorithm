//한수
#include <iostream>

using namespace std;

bool checkHanNum(int num) {
  if(num <100) return true;
  if(num == 1000) return false;
  int before = num%10;
  num = num / 10;
  int current = num%10;
  int gap = current - before;
  int tempGap = 0;
  while(num > 0) {
    before = current;
    num = num / 10;
    current = num%10;
    tempGap = current - before;
    if(tempGap != gap) return false;
    num = num / 10;
  }
  return true;
}

int main() {
  int n;
  cin >> n;
  int cnt = 0;
  for(int i=1; i<=n; i+=1) {
    if(checkHanNum(i)) cnt += 1;
  }
  cout << cnt;
}