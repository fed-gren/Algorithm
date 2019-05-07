#include <string>
#include <iostream>

using namespace std;

string solution(string s) {
    string answer = "";
    string delimeter = " ";
    int max = INT16_MIN;
    int min = INT16_MAX;
    int num = 0;
    size_t pos = 0;
    string token;
    while((pos = s.find(delimeter)) != string::npos) {
      token = s.substr(0, pos);
      num = stoi(token);
      if(num > max) max = num;
      if(num < min) min = num;
      s.erase(0, pos + delimeter.length());
    }
    num = stoi(s);
    if(num > max) max = num;
    if(num < min) min = num;

    answer += (to_string(min) + " " + to_string(max));
    return answer;
}

int main() {
  string ans;
  ans = solution("1 2 3 4");
  cout << ans << "\n";
  ans = solution("-1 -2 -3 -4");
  cout << ans << "\n";
}