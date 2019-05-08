#include <iostream>

using namespace std;

bool isNotPrime[10001];

int main() {
  int start, end;
  cin >> start >> end;
  isNotPrime[1] = true;
  for(int i=2; i*i<10001; i+=1) {
    for(int j=i*i; j<10001; j += i) {
      isNotPrime[j] = true;
    }
  }
  int sum = 0;
  int min = 0;
  for(int i=start; i<=end; i+=1) {
    if(isNotPrime[i] == false) {
      if(min == 0) min = i;
      sum += i;
    }
  }
  if(min == 0) {
    cout << -1;
  } else {
    cout << sum << "\n";
    cout << min;
  }
}