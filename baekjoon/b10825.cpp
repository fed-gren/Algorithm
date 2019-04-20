#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
class Report
{
public:
  string name;
  int kor;
  int eng;
  int math;
  Report(string name, int kor, int eng, int math) : name(name), kor(kor), eng(eng), math(math){};
};

bool compare(Report r1, Report r2)
{
  if (r1.kor > r2.kor)
    return true;
  else if (r1.kor == r2.kor)
  {
    if (r1.eng < r2.eng)
      return true;
    else if (r1.eng == r2.eng)
    {
      if (r1.math > r2.math)
        return true;
      else if (r1.math == r2.math)
        return r1.name < r2.name;
    }
  }
  return false;
}

void printReport(vector<Report> &r)
{
  vector<Report>::iterator it;
  for (it = r.begin(); it != r.end(); ++it)
  {
    cout << (*it).name << "\n";
  }
}

int n;
vector<Report> report;
string name;
int kor, eng, math;

int main()
{
  scanf("%d\n", &n);
  while (n--)
  {
    cin >> name >> kor >> eng >> math;
    report.push_back(Report(name, kor, eng, math));
  }
  sort(report.begin(), report.end(), compare);
  printReport(report);
}