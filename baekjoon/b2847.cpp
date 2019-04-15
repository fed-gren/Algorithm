#include <iostream>
#include <list>
using namespace std;

int n;
list<int> scores;

int main() {
  cin >> n;
  while(n--) {
    int score;
    cin >> score;
    scores.push_front(score);
  }
  list<int>::iterator iter;
  int before = 0, current = 0;
  int answer = 0;
  int minus = 0;
  for(iter=scores.begin(); iter!=scores.end(); ++iter) {
    if(before == 0) {
      before = *iter;
    } else {
      current = *iter;
      if(current >= before) {
        minus = (current - before + 1);
        answer += minus;
        before = current - minus;
      } else {
        before = current;
      }
    }
  }
  cout << answer;
}