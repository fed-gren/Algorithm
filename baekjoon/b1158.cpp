#include <iostream>
#include <list>
using namespace std;

void josephus(int n, int k) {
  list<int> people;
  for(int i=1; i<=n; i+=1) {
    people.push_back(i);
  }
  list<int>::iterator kill = people.begin();
  while(n) {
    for(int i=0; i<(k-1) % n; i+=1) {
      ++kill;
      if(kill == people.end()) kill = people.begin();
    }
    cout << *kill;
    kill = people.erase(kill);
    if(kill == people.end()) kill = people.begin();
    n -= 1;
    if(n) cout << ", ";
  }
}

int main() {
  int n, k;
  cin >> n >> k;
  cout << '<';
  josephus(n, k);
  cout << '>' << "\n";
}