#include <iostream>
#include <vector>

using namespace std;

int main() {
  vector<int> mapX(1001, 0);
  vector<int> mapY(1001, 0);
  for(int i=0; i<3; i+=1) {
    int x, y;
    cin >> x >> y;
    mapX[x] += 1;
    mapY[y] += 1;
  }
  for(int i=0; i<1001; i+=1) {
    if(mapX[i] == 1) cout << i << " ";
  }
  for(int i=0; i<1001; i+=1) {
    if(mapY[i] == 1) cout << i;
  }
}