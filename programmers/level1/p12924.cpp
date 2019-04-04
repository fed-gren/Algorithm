#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 1;
    for(int s=n-1; s>=1; s-=1) {
        int sum = 0;
        sum += s;
        for(int e=s-1; e>=1; e-=1) {
            sum += e;
            if(sum == n) answer += 1;
            else if(sum > n) break;
        }
    }
    return answer;
}