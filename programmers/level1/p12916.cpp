#include <string>
#include <iostream>

using namespace std;

bool solution(string s)
{
    bool answer = true;
    int strLen = s.length();
    int cntP = 0, cntY = 0;
    for(int i=0; i<strLen; i+=1) {
        if(s[i] == 'p' || s[i] == 'P') cntP += 1;
        if(s[i] == 'y' || s[i] == 'Y') cntY += 1;
    }
    if(cntP != cntY) answer = false;
    return answer;
}