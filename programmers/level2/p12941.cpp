#include <iostream>
#include<vector>
#include <bits/stdc++.h> 

using namespace std;

int solution(vector<int> A, vector<int> B)
{
    int answer = 0;
    int len = A.size();
    sort(A.begin(), A.end());
    sort(B.begin(), B.end(), greater<int>());
    
    for(int i=0; i < len; i+=1) {
        answer += (A[i] * B[i]);
    }
    return answer;
}