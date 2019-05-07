#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(int brown, int red) {
    vector<int> answer;
    int area = brown + red;
    int width, height = 0;
    while(true) {
      height += 1;
      if(area % height == 0) {
        width = area / height;
        if((width - 2) * (height - 2) == red) {
          answer.push_back(width);
          answer.push_back(height);
          break;
        }
      }
    }
    return answer;
}

vector<int>::iterator it;

void printVector(vector<int> input) {
  for(it=input.begin(); it!=input.end(); ++it) {
    cout << *it << " ";
  }
}

int main() {
  vector<int> ans;
  ans = solution(10, 2);
  printVector(ans);   //4 3
  ans = solution(8, 1);
  printVector(ans);   //3 3
  ans = solution(24, 24);
  printVector(ans);   //8 6
}