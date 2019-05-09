#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> cards;

int bSearch(int s, int e, int num)
{
  int mid;
  while (s <= e)
  {
    mid = (s + e) / 2;
    if (num == cards[mid])
      return 1;
    else if (num > cards[mid])
    {
      s = mid + 1;
    }
    else
    {
      e = mid - 1;
    }
  }
  return 0;
}

int main()
{
  cin.tie(0);
  ios_base::sync_with_stdio(false);
  int n, m, card, find;
  vector<int> finds;
  cin >> n;
  while (n--)
  {
    cin >> card;
    cards.push_back(card);
  }
  sort(cards.begin(), cards.end());
  cin >> m;
  while (m--)
  {
    cin >> find;
    finds.push_back(find);
    cout << bSearch(0, cards.size()-1, find) << " ";
  }
}