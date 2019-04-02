#include <string>
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> answer;
    vector<int> ansA = {1,2,3,4,5};
    vector<int> ansB = {2,1,2,3,2,4,2,5};
    vector<int> ansC = {3,3,1,1,2,2,4,4,5,5};
    vector<int> ans = {-1, 0, 0, 0};
    int answersLen = answers.size();
    int aLen = ansA.size();
    int bLen = ansB.size();
    int cLen = ansC.size();
    int max  = 0;
    for(int i = 0; i < answersLen; i+=1) {
        if(answers[i] == ansA[i % aLen]) ans[1] += 1;
        if(answers[i] == ansB[i % bLen]) ans[2] += 1;
        if(answers[i] == ansC[i % cLen]) ans[3] += 1;
        if(max < ans[1]) max = ans[1];
        if(max < ans[2]) max = ans[2];
        if(max < ans[3]) max = ans[3];
    }
    for(int i=1; i < 4; i+=1) {
        if(ans[i] == max) answer.push_back(i);
    }
    return answer;
}