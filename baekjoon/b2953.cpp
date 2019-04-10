#include <iostream>
#include <vector>

using namespace std;

int main() {
  int numScore = 4;
  int cooks = 5;
  int totalScore = 0;
  int max = 0;

  int score = 0;
  int maxScore = 0;
  int maxIdx = 0;
  for(int i = 1; i <= (numScore*cooks); i += 1) {
    cin >> score;
    totalScore += score;
    if(i % numScore == 0 && i > 0) {
      if(max < totalScore) {
         max = totalScore;
         maxIdx = i/numScore;
      }
      totalScore = 0;
    }
  }
  cout << maxIdx << " " << max;
}