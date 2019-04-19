#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Position
{
public:
  int x;
  int y;
  Position(int x, int y) : x(x), y(y){};
};

bool compare(Position p1, Position p2)
{
  if (p1.y == p2.y)
  {
    return p1.x < p2.x;
  }
  else
  {
    return p1.y < p2.y;
  }
}

void printPosition(vector<Position> &p)
{
  vector<Position>::iterator it;
  for (it = p.begin(); it != p.end(); ++it)
  {
    cout << (*it).x << " " << (*it).y << "\n";
  }
}

int n, x, y;
vector<Position> pos;

int main()
{
  cin.tie(NULL);
  ios::sync_with_stdio(false);
  cin >> n;
  while (n--)
  {
    cin >> x >> y;
    pos.push_back(Position(x, y));
  }
  sort(pos.begin(), pos.end(), compare);
  printPosition(pos);
}