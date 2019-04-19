//나이 순 정렬
//나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Members
{
public:
  int age;
  string name;
  int id;
  Members(int age, string name, int id) : age(age), name(name), id(id) {}
};

bool compare(Members a, Members b)
{
  if (a.age == b.age)
  {
    return a.id < b.id;
  }
  else
  {
    return a.age < b.age;
  }
}

void printMembers(vector<Members> &members)
{
  vector<Members>::iterator it;
  for (it = members.begin(); it != members.end(); ++it)
  {
    cout << (*it).age << " " << (*it).name << "\n";
  }
}

int n = 0;
int age, id;
string name;

int main()
{
  cin.tie(NULL);
  ios::sync_with_stdio(false);
  vector<Members> members;
  cin >> n;
  while (n--)
  {
    cin >> age >> name;
    id += 1;
    members.push_back(Members(age, name, id));
  }
  sort(members.begin(), members.end(), compare);
  printMembers(members);
}