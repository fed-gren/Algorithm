#include <iostream>
#include <string>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

int main() {
  string strNum = "";
  cin >> strNum;
  int len = strNum.length();
  vector <int> numArr = vector <int>(len);
  for(int i=0; i<len; i+=1) {
    numArr[i] = strNum[i] - '0';
  }
  sort(numArr.begin(), numArr.end(), greater<int>());
  for(int i=0; i<len; i+=1) {
    cout << numArr[i];
  }
}