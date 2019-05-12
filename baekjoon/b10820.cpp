#include <iostream>

using namespace std;

int cntLower, cntUpper, cntNum, cntSpace;

void solve(string text) {
  cntLower=0, cntUpper=0, cntNum=0, cntSpace=0;
  for(int i=0; i<text.size(); i+=1) {
    int ascii = (int)text[i];
    if(ascii >= (int)'0' && ascii <= (int)'9') cntNum += 1;
    else if(ascii >= (int)'a' && ascii <= (int)'z') cntLower += 1;
    else if(ascii >= (int)'A' && ascii <= (int)'Z') cntUpper += 1;
    else if(ascii == (int)' ') cntSpace += 1;
  }
}

int main() {
  string text;
  while(getline(cin, text)) {
    solve(text);
    cout << cntLower << " " << cntUpper << " " << cntNum << " " << cntSpace << "\n";
  }
}