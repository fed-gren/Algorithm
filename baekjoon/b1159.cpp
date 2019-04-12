#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n;
  cin >> n;
  bool flag = false;
  vector<int> alpha(26, 0);
  for(int i=0; i<n; i+=1) {
    char str[31];
    cin >> str;
    alpha[str[0] - 'a'] += 1;
  }
  for(int i=0; i<26; i+=1) {
    if(alpha[i] >= 5) {
      cout << (char)(i + 'a');
      flag = true;
    }
  }
  if(!flag) cout << "PREDAJA";
}