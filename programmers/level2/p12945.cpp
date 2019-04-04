#include <string>
#include <vector>

using namespace std;

vector<int> memo(100001, 0);

int solution(int n) {
    int answer = 0;
    memo[0] = 0;
    memo[1] = 1;
    for(int i=2; i<=n; i+=1) {
        memo[i] = (memo[i-1] + memo[i-2]) % 1234567;
    }
    answer = memo[n];
    return answer;
}