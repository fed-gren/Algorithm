#include <iostream>
#include <math.h>

using namespace std;

int main() {
    int a,b,c;
    cin >> a >> b >> c;
    
    int ans1 = (a + b) % c;
    int ans2 = (a % c + b % c) % c;
    int ans3 = (a * b) % c;
    int ans4 = (a % c * b % c) % c;
    
    cout << ans1 << endl;
    cout << ans2 << endl;
    cout << ans3 << endl;
    cout << ans4 << endl;
}