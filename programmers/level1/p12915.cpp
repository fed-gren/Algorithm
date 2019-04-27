#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int nth;

bool compare(string s1, string s2)
{
  if (s1[nth] != s2[nth])
  {
    return s1[nth] < s2[nth];
  }
  else
  {
    return s1 < s2;
  }
}

vector<string> solution(vector<string> strings, int n)
{
  // vector<string> answer;

  nth = n;
  sort(strings.begin(), strings.end(), compare);
  return strings;
}

void printVector(vector<string> v)
{
  vector<string>::iterator it;
  for (it = v.begin(); it != v.end(); ++it)
  {
    cout << (*it) << " ";
  }
  cout << "\n";
}

int main()
{
  vector<string> ans;
  vector<string> input1;
  input1.push_back("sun");
  input1.push_back("bed");
  input1.push_back("car");
  ans = solution(input1, 1);
  printVector(ans); //[car, bed, sun]
  input1.resize(0);
  input1.push_back("abce");
  input1.push_back("abcd");
  input1.push_back("cdx");
  ans = solution(input1, 2);
  printVector(ans); //[abcd, abce, cdx]
}