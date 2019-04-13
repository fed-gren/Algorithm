#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n, end;
  cin >> n >> end;
  vector<int> count(end+1, 0);
  while(n--) {
    int period;
    cin >> period;
    int index = period;
    while(index <= end+1) {
      count[index] += 1;
      index += period;
    }
  }
  int cnt = 0;
  for(int i=1; i<= end; i+=1) {
    if(count[i] > 0) cnt += 1;
  }
  cout << cnt;
}