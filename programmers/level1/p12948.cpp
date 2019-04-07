//핸드폰 번호 가리기
#include <string>
#include <vector>

using namespace std;

string solution(string phone_number) {
    string answer = "";
    int len = phone_number.length();
    for(int i=len-1; i>=0; i-=1) {
        if(i < len - 4) {
            answer = "*" + answer;
        } else {
            answer = phone_number[i] + answer;
        }
    }
    return answer;
}