#include <iostream>

using namespace std;

int main(void) {
    int a;
    int b;
    cin >> a >> b;
    for(int i=0; i<b; i+=1) {
      for(int j=0; j<a; j+=1) {
        cout << '*';
      }
      cout << "\n";
    }
    return 0;
}