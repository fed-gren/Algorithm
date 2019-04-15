#include <iostream>
#include <list>

using namespace std;

list<int> cards;
int n, m;
int maxSum;

void getSumMyCards(int idx, int cnt, int sum) {
  if(cnt == 3 && sum <= m) {  //조건 만족
    maxSum = max(maxSum, sum);
    return;
  }

  if(idx >= n || cnt > 3 || sum > m) {
    return;
  }

  list<int>::iterator iter = cards.begin();
  advance(iter, idx);
  getSumMyCards(idx + 1, cnt + 1, sum + (*iter));
  getSumMyCards(idx + 1, cnt, sum);
}

int main() {
  ios_base::sync_with_stdio(0);
  cin.tie(0);
  cin >> n >> m;
  for(int i=0; i<n; i+=1) {
    int card;
    cin >> card;
    cards.push_back(card);
  }
  getSumMyCards(0, 0, 0);
  cout << maxSum << "\n";
  return 0;
}