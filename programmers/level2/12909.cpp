#include<string>
#include <iostream>
#include <stack>

using namespace std;

bool solution(string s)
{
    stack <int> stack;
    bool answer = true;
    int strLen = s.length();
    for(int i=0; i<strLen; i+=1) {
        if(s[i] == '(') {
            stack.push(1);
        } else if(s[i] == ')') {
            if(stack.empty()) { //underflow
                answer = false;
                break;
            }
            stack.pop();
        }
    }
    
    if(!stack.empty()) answer = false;
    return answer;
}