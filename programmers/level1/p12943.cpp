#include <string>
#include <vector>

using namespace std;

int solution(int num) {
    int answer = 0;
    int myNum = num;
    while(myNum != 1) {
      if(answer > 450) {
        answer = -1;
        break;
      }
      answer += 1;

      if(0 == myNum % 2) {
        myNum = myNum / 2;
      } else {
        myNum = myNum * 3 + 1;
      }
    }
    
    return answer;
}