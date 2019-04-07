//별 찍기 - 2
#include <iostream>
using namespace std;
int main() {
  int n = 0;
  cin >> n;
  for(int i=0; i<n; i+=1) {
    for(int j=n-i-1; j>0; j-=1) {
      cout << " ";
    } 
    for(int j=0; j<i+1; j+=1) {
      cout << "*";
    }
    cout << "\n";
  }
}