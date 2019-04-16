//셀프넘버
#include <iostream>
#include <vector>

using namespace std;

vector<int> vect(10001, 0);

int getMadeNum(int num) {
  int made = num;
  while(num > 0) {
    made += (num % 10);
    num = num/10;
  }
  return made;
}

void checkSelfNumber(int cnt) {
  for(int i=1; i<=cnt; i+=1) {
    int index = getMadeNum(i);
    if(index > 10000) continue;
    else vect[getMadeNum(i)] += 1;
  }
}

int main() {
  int cnt = 10000;
  checkSelfNumber(cnt);
  for(int i=1; i<=cnt; i+=1) {
    if(vect[i] == 0) cout << i << "\n";
  }
  return 0;
}
