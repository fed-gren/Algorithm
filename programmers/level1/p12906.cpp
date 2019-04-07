// 같은 숫자는 싫어
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    vector<int> answer;
    int len = arr.size();
    int temp = arr[0];
    answer.push_back(temp);
    for(int i=1; i<len; i+=1) {
        if(arr[i] == temp) continue;
        else {
            temp = arr[i];
            answer.push_back(temp);
        }
    }
    return answer;
}