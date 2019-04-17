//평균은 넘겠지
#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

int tc, n, score, sum, checks;
double avg, rate;
vector<int> scores;
vector<int>::iterator it;

int main() {
  cin >> tc;
  while(tc--) {
    cin >> n;
    scores.clear();
    scores.resize(n);
    for(int i=0; i<n; i+=1) {
      cin >> score;
      scores.push_back(score);
    }
    sum = accumulate(scores.begin(), scores.end(), 0);
    avg = (double)sum / (double)n;
    checks = 0;
    for(it=scores.begin(); it!=scores.end(); ++it) {
      if(*it > avg) checks += 1;
    }
    rate = (double)checks/(double)n;
    printf("%.3f%%\n", rate*100);
  }
}