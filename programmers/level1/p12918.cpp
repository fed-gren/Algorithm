#include <string>
#include <vector>

using namespace std;

bool solution(string s) {
    int len = s.length();
    if(len != 4 && len != 6) return false;
    for(int i=0; i<len; i+=1) {
        if(!isdigit(s[i])) {
            return false;
        }
    }
    return true;
}