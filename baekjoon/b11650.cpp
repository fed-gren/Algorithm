#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Position
{
public:
  int x;
  int y;
  Position(int x, int y) : x(x), y(y) {}
};

bool compare(Position p1, Position p2)
{
  if (p1.x == p2.x)
  {
    return p1.y < p2.y;
  }
  else
  {
    return p1.x < p2.x;
  }
}

void printPositions(vector<Position> &pos)
{
  vector<Position>::iterator it;
  for (it = pos.begin(); it != pos.end(); ++it)
  {
    cout << (*it).x << " " << (*it).y << "\n";
  }
}

int n;

int main()
{
  cin.tie(NULL);
  ios::sync_with_stdio(false);
  cin >> n;
  vector<Position> pos;
  int x, y;
  while (n--)
  {
    cin >> x >> y;
    pos.push_back(Position(x, y));
  }
  sort(pos.begin(), pos.end(), compare);
  printPositions(pos);
}